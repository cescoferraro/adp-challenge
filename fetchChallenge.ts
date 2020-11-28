import axios from "axios";
import { ChallengeResponse } from "./types";

export default async (): Promise<ChallengeResponse> => {
  const response = await axios.get<ChallengeResponse>(
    "https://interview.adpeai.com/api/v1/get-task"
  );
  return response.data;
};
