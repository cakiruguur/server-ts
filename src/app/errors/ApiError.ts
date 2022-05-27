export default class ApiError extends Error {
  readonly name = "ApiError";
  readonly status: number;
  readonly message: string;
  constructor(msg: string, status: number) {
    super(msg);
    this.message = msg;
    this.status = status;
  }
}
