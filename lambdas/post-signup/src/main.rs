use aws_lambda_events::cognito::CognitoEventUserPoolsPostConfirmation;
use lambda_http::{
    lambda_runtime::{self, LambdaEvent},
    service_fn, Error,
};
use tracing::info;

#[tokio::main]
async fn main() -> Result<(), Error> {
    tracing_subscriber::fmt()
        .without_time()
        .with_ansi(false)
        .compact()
        .with_max_level(tracing::Level::INFO)
        .init();
    lambda_runtime::run(service_fn(handler)).await?;

    Ok(())
}

async fn handler(
    request: LambdaEvent<CognitoEventUserPoolsPostConfirmation>,
) -> Result<CognitoEventUserPoolsPostConfirmation, Error> {
    info!("NEW ACCOUNT HANDLER executing for {:?}", request.payload.request.user_attributes);
    Ok(request.payload)
}
