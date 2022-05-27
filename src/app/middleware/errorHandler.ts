import { ErrorRequestHandler, RequestHandler } from "express";
import httpStatus from "http-status";

export const notFound: RequestHandler = (req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    message: "404 Not Found",
  });
  next()
};

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR).json({
    error: true,
    name: err.name,
    message: err.message || err,
    status: err.status || 500,
    path: err.path,
  });

  next()
};
