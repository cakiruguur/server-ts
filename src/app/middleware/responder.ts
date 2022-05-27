import { RequestHandler, Response } from "express";

const responder: RequestHandler = (req, res, next) => {
  res.success = (message, data, status=200) => {
    return res.status(status).json({
      code: status,
      error: false,
      message,
      data
    });
  };

  next()
};

export default responder;
