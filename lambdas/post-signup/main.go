package main

import (
	"context"
	"errors"
	"fmt"
	"os"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/machinebox/graphql"
)

type Event events.CognitoEventUserPoolsPostConfirmation

var client *graphql.Client
var addUserRequest *graphql.Request

func init() {
	appsyncPath, exists := os.LookupEnv("APPSYNC_ENDPOINT")

	if !exists {
		fmt.Println("[FATAL ERROR]: Missing environment variable: APPSYNC_ENDPOINT")
		return
	}

	client = graphql.NewClient(appsyncPath)

	addUserRequest = graphql.NewRequest(``)
}

func Handler(ctx context.Context, event *Event) (*Event, error) {
	if client == nil {
		return nil, errors.New("client was not initialized")
	}

	return event, nil
}

func main() {
	lambda.Start(Handler)
}
