class HTTPError extends Error {
  response: Response;
  // statusCode: number;

  constructor(response: Response) {
    super();
    this.response = response;
    // this.statusCode = statusCode;
  }
}

export { HTTPError };
