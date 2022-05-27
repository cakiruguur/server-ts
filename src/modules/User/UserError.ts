export default class UserError extends Error {
    readonly name = "UserError";
    readonly status: number;
    readonly message: string;
    constructor(msg: string, status: number) {
      super(msg);
      this.message = msg;
      this.status = status;
    }
  }
  