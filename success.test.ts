import "mocha";
import chai from "chai";
import validator from "validator";
import fetchChallenge from "./fetchChallenge";
import sendChallengeResult from "./sendResult";
import bodyGenerator from "./bodyGenerator";
import resultCalculator from "./resultCalculator";
import { ChallengeResponse } from "./types";

describe("success cases", () => {
  it("should return a challenge", async () => {
    const challengeResult = await fetchChallenge();
    chai.assert.equal(validator.isUUID(challengeResult.id), true);
    chai
      .expect([
        "multiplication",
        "addition",
        "division",
        "subtraction",
        "remainder",
      ])
      .contains(challengeResult.operation);
  });

  it("generate right submit body", () => {
    const challenge: ChallengeResponse = {
      id: "skdfj",
      operation: "addition",
      left: 4,
      right: 44,
    };
    const result = bodyGenerator(challenge);
    chai.assert.equal(
      result.result,
      resultCalculator(challenge.operation, challenge.left, challenge.right)
    );
    chai.assert.equal(result.id, challenge.id);
  });

  it("should submit a challenge", async () => {
    const challengeResult = await fetchChallenge();
    const result = await sendChallengeResult(bodyGenerator(challengeResult));
    chai.assert.equal(result, "Correct");
  });
});
