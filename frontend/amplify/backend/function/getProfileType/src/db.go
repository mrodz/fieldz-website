package main

import (
	"context"
	"log"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
)

const TableName = "fieldz-account-type"

var db dynamodb.Client

func init() {
	sdkConfig, err := config.LoadDefaultConfig(context.TODO())

	if err != nil {
		log.Fatal(err)
	}

	db = *dynamodb.NewFromConfig(sdkConfig)
}

type UserRoll uint8

const (
	Guest UserRoll = iota
	Admin
	Coach
)

type UserStatus struct {
	Sub  string `json:"sub" dynamodbav:"sub"`
	Role UserRoll
}

func getAccountType(ctx context.Context, sub string) (UserRoll, error) {
	key, err := attributevalue.Marshal(sub)

	if err != nil {
		log.Printf("invalid sub: %v", sub)
		return Guest, err
	}

	input := &dynamodb.GetItemInput{
		TableName: aws.String(TableName),
		Key: map[string]types.AttributeValue{
			"sub": key,
		},
	}

	log.Printf("Calling Dynamodb with input: %v", input)

	result, err := db.GetItem(ctx, input)

	if err != nil {
		log.Printf("Error: %v", err)
		return Guest, err
	}

	log.Printf("Executed GetItem DynamoDb successfully. Result: %#v", result)

	if result.Item == nil {
		log.Print("No key found, returning Guest user")
		return Guest, nil
	}

	var userRoll UserRoll
	err = attributevalue.UnmarshalMap(result.Item, &userRoll)

	if err != nil {
		return Guest, err
	}

	log.Printf("Returning %v", userRoll)

	return userRoll, nil
}

func setAccountType(ctx context.Context, sub string, profileType UserRoll) (*UserStatus, error) {
	paired := UserStatus{
		Sub:  sub,
		Role: profileType,
	}

	item, err := attributevalue.MarshalMap(paired)
	if err != nil {
		return nil, err
	}

	input := &dynamodb.PutItemInput{
		TableName: aws.String(TableName),
		Item:      item,
	}

	res, err := db.PutItem(ctx, input)
	if err != nil {
		return nil, err
	}

	err = attributevalue.UnmarshalMap(res.Attributes, &paired)
	if err != nil {
		return nil, err
	}

	return &paired, nil
}
