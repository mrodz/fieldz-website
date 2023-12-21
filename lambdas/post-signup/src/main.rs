use lambda_http::{service_fn, Error, IntoResponse, Request};

#[tokio::main]
async fn main() -> Result<(), Error> {
    lambda_http::run(service_fn(hello)).await?;
    Ok(())
}

async fn hello(request: Request) -> Result<impl IntoResponse, std::convert::Infallible> {
    Ok(format!("recieved: {request:#?}"))
}
