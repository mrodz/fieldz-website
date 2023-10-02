use aws_lambda_events::cognito::CognitoEventUserPoolsPostConfirmation;
use lambda_runtime::{run, service_fn, Error, LambdaEvent};

/// This is the main body for the function.
/// Write your code inside it.
/// There are some code example in the following URLs:
/// - https://github.com/awslabs/aws-lambda-rust-runtime/tree/main/examples

async fn function_handler(event: LambdaEvent<CognitoEventUserPoolsPostConfirmation>) -> Result<(), Error> {
    let event_as_str = format!("{event:?}");
    tracing::info!({ %event_as_str }, "Received payload");

    Ok(())
}

#[tokio::main]
async fn main() -> Result<(), Error> {
    tracing_subscriber::fmt()
        .with_max_level(tracing::Level::INFO)
        // disable printing the name of the module in every log line.
        .with_target(false)
        // disabling time is handy because CloudWatch will add the ingestion time.
        .without_time()
        .init();

    let function = service_fn(move |event| async move {
        function_handler(event).await
    });
    

    run(function).await?;

    Ok(())
}
