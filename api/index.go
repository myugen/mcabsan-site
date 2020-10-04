package api

import (
	"net/http"
	"os"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	log "github.com/sirupsen/logrus"
)

func Api(w http.ResponseWriter, r *http.Request) {
	log.SetOutput(os.Stdout)
	log.SetLevel(log.InfoLevel)
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Routes
	e.HEAD("/api", ping)
	e.GET("/api", ping)

	// Start server
	e.ServeHTTP(w, r)
	log.Info("Index api initialized!")
}

func ping(c echo.Context) error {
	return c.NoContent(http.StatusOK)
}
