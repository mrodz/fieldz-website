package main

import (
	"context"
	"errors"
	"fmt"
	"log"
	"os"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/machinebox/graphql"
)

type AccountType uint8

const (
	GUEST AccountType = iota
	COACH
	ADMIN
)

type CreateUserInput struct {
	sub  string
	Type AccountType `json:"type"`
}

type AddUserResponse struct {
	id   string
	sub  string
	Type AccountType `json:"type"`
}

type Event events.CognitoEventUserPoolsPostConfirmation

var client *graphql.Client
var addUserRequest *graphql.Request

func Handler(ctx context.Context, event *Event) (*Event, error) {
	if client == nil {
		return nil, errors.New("client was not initialized")
	}

	sub := event.Request.UserAttributes["sub"]

	addUserRequest.Var("input", CreateUserInput{
		sub:  sub,
		Type: COACH,
	})

	log.Printf("%#v\n", addUserRequest)
	var response AddUserResponse

	err := client.Run(ctx, addUserRequest, &response)

	if err != nil {
		return nil, err
	}

	log.Printf("%#v\n", response)

	return event, nil
}

func main() {
	appsyncPath, exists := os.LookupEnv("APPSYNC_ENDPOINT")

	if !exists {
		fmt.Println("[FATAL ERROR]: Missing environment variable: APPSYNC_ENDPOINT")
	}

	client = graphql.NewClient(appsyncPath)

	addUserRequest = graphql.NewRequest(`
	  mutation CreateUser(
		$input: CreateUserInput!
		$condition: ModelUserConditionInput
	  ) @aws_cognito_user_pools {
		createUser(input: $input, condition: $condition) {
		  id
		  sub
		  type
		}
	  }
	`)

	lambda.Start(Handler)
}
