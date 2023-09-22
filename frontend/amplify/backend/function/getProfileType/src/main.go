package main

import (
	"context"

	"github.com/aws/aws-lambda-go/lambda"
)

type Event struct {
	Sub string `json:"sub"`
}

func HandleRequest(ctx context.Context, event Event) (UserRoll, error) {
	return getAccountType(ctx, event.Sub)
}

func main() {
	lambda.Start(HandleRequest)
}
