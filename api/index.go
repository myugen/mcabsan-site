package api

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func Api(w http.ResponseWriter, r *http.Request) {

	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Routes
	e.HEAD("/api", ping)
	e.GET("/api", ping)

	// Start server
	e.ServeHTTP(w, r)
}

func ping(c echo.Context) error {
	return c.NoContent(http.StatusOK)
}
