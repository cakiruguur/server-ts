declare namespace Express {
    export interface Response {
      success(message: string, data?: object, status?: number): Response
    }
  }