package mail

import (
	"net/http"
	"os"

	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

type contactEmail struct {
	Name    string `json:"name"`
	Address string `json:"address"`
}

type SendEmailRequest struct {
	To struct {
		contactEmail
	} `json:"to"`
	From struct {
		contactEmail
	} `json:"from"`
	Subject string `json:"subject"`
	Body    struct {
		Text string `json:"text"`
		Html string `json:"html"`
	} `json:"body"`
}

type SendEmailResponse struct {
	Result string `json:"result"`
}

func Mail(w http.ResponseWriter, r *http.Request) {
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Routes
	parent := e.Group("/api/mail")
	parent.GET("", ping)
	parent.POST("/send", send)

	// Start server
	e.ServeHTTP(w, r)
}

func ping(c echo.Context) error {
	return c.NoContent(http.StatusOK)
}

func send(c echo.Context) error {
	form := new(SendEmailRequest)
	if err := c.Bind(form); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, "bad request form", err)
	}

	from := mail.NewEmail(form.From.Name, form.From.Address)
	subject := form.Subject
	to := mail.NewEmail(form.To.Name, form.To.Address)
	plainTextContent := form.Body.Text
	htmlContent := form.Body.Html
	message := mail.NewSingleEmail(from, subject, to, plainTextContent, htmlContent)

	client := sendgrid.NewSendClient(os.Getenv("SENDGRID_API_KEY"))
	response, err := client.Send(message)
	if err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, "error sending mail", err)
	}

	data := SendEmailResponse{
		Result: response.Body,
	}

	return c.JSON(http.StatusOK, &data)
}
