/* eslint-disable no-console */
import fetchChallenge from "./fetchChallenge";
import sendChallengeResult from "./sendResult";
import bodyGenerator from "./bodyGenerator";

const doChallenge = (): void => {
  console.log(`========================== `);
  fetchChallenge().then((r) => {
    console.log(`===== Challenge Received ${JSON.stringify(r)}`);
    const resultBody = bodyGenerator(r);
    console.log(`===== Challenge Submitted ${JSON.stringify(resultBody)}`);
    sendChallengeResult(resultBody).then((t) => {
      console.log(`===== Submitted response ${JSON.stringify(t)}`);
      console.log(`\n`);
    });
  });
};

setInterval(() => {
  doChallenge();
}, 5000);

doChallenge();
