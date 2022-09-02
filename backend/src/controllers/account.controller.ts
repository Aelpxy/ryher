import { Response, Request } from "express";

import { findUserById } from "../services/account.service";

async function getAccount(req: Request, res: Response) {
  try {
    const data = await findUserById(req.user.id);

    if (!data) {
      res.status(404).send({
        statusCode: 404,
        message: "Invalid User Request",
        payload: null,
      });
    }

    res.status(200).send({
      statusCode: 200,
      message: "Success",
      payload: data,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: null,
    });
  }
}

async function updateAccount(req: Request, res: Response) {
  try {
    const data = await findUserById(req.user.id);

    if (!data) {
      res.status(404).send({
        statusCode: 404,
        message: "Invalid User Request",
        payload: null,
      });
    }
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: null,
    });
  }
}

async function deleteAccount(req: Request, res: Response) {
  try {
    const data = await findUserById(req.user.id);

    if (!data) {
      res.status(404).send({
        statusCode: 404,
        message: "Invalid User Request",
        payload: null,
      });
    }
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      payload: null,
    });
  }
}

export { getAccount, updateAccount, deleteAccount };
