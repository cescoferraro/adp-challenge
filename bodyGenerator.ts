import { ChallengeResponse, ResultBody } from "./types";
import resultCalculator from "./resultCalculator";

export default (response: ChallengeResponse): ResultBody => {
  return {
    id: response.id,
    result: resultCalculator(response.operation, response.left, response.right),
  };
};
