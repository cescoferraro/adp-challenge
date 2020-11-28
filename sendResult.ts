import axios from "axios";
import { ResultBody } from "./types";
import responses from "./responses";

export default async (resultBody: ResultBody): Promise<string> => {
  try {
    const response = await axios.post<string>(
      "https://interview.adpeai.com/api/v1/submit-task",
      resultBody
    );
    return response.data;
  } catch (e) {
    const { status } = e.response;
    let error = "default error";
    if (status === 200) {
      error = responses.SUCCESS(resultBody.id, resultBody.result);
    }
    if (status === 400) {
      error = responses.ERROR_INCORRECT;
    }
    if (status === 404) {
      error = responses.ERROR_ID_NOT_FOUND;
    } else if (status === 500) {
      error = responses.ERROR_DATABASE;
    }
    return error;
  }
};
