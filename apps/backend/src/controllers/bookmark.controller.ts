import { Response, Request } from "express";

async function createBookmark(req: Request, res: Response) {
  try {
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: null,
    });
  }
}

async function getAllBookmark(req: Request, res: Response) {
  try {
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: null,
    });
  }
}

async function getBookmarkwithId(req: Request, res: Response) {
  try {
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: null,
    });
  }
}

async function deleteBookmarkwithId(req: Request, res: Response) {
  try {
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: null,
    });
  }
}

export { createBookmark, getAllBookmark, getBookmarkwithId, deleteBookmarkwithId };
