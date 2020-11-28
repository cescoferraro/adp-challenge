import "mocha";
import * as chai from "chai";
import sendResult from "./sendResult";
import fetchChallenge from "./fetchChallenge";
import bodyGenerator from "./bodyGenerator";
import responses from "./responses";

describe("error cases", () => {
  it("should submit a wrong challenge result ", async () => {
    const challengeResult = await fetchChallenge();
    const resultBody = bodyGenerator(challengeResult);
    const result = await sendResult({ ...resultBody, result: 2323 });
    chai.assert.equal(result, responses.ERROR_INCORRECT);
  });

  it("should submit a wrong challenge id", async () => {
    const challengeResult = await fetchChallenge();
    const resultBody = bodyGenerator(challengeResult);
    const result = await sendResult({ ...resultBody, id: "2349234u" });
    chai.assert.equal(result, responses.ERROR_ID_NOT_FOUND);
  });
});
