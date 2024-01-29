.PHONY: build clean

export GOARCH := amd64
export GOOS := linux

build: post-signup
	@echo Target: %GOOS%.%GOARCH%

post-signup: ./post-signup/*.go
	go build -ldflags="-s -w" -o bin/post-signup $^

clean:
	rm -rf ./bin ./vendor Gopkg.lock
