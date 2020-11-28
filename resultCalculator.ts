import { Operation } from "./types";

export default (operation: Operation, left: number, right: number): number => {
  let result;
  switch (operation) {
    case "remainder":
      result = left % right;
      break;
    case "addition":
      result = left + right;
      break;
    case "multiplication":
      result = left * right;
      break;
    case "division":
      result = left / right;
      break;
    default:
      result = left - right;
      break;
  }
  return result;
};
