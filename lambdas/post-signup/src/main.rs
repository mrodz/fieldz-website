use aws_lambda_events::cognito::{
    CognitoEventUserPoolsPostConfirmationRequest, //CognitoEventUserPoolsPostConfirmationResponse,
};
use lambda_http::{
    lambda_runtime::{self, LambdaEvent},
    service_fn, Error,
};
use tracing::debug;

#[tokio::main]
async fn main() -> Result<(), Error> {
    tracing_subscriber::fmt()
        .without_time()
        .with_max_level(tracing::Level::INFO)
        .init();

    lambda_runtime::run(service_fn(handler)).await?;

    Ok(())
}

async fn handler(
    request: LambdaEvent<CognitoEventUserPoolsPostConfirmationRequest>,
) -> Result<CognitoEventUserPoolsPostConfirmationRequest, std::convert::Infallible> {
    debug!("recieved: {request:#?}");

    Ok(request.payload)
    // Ok(CognitoEventUserPoolsPostConfirmationResponse {})
    // let mut builder = Response::into_response(self);
}
