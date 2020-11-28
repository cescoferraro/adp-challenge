export type Operation =
  | "multiplication"
  | "addition"
  | "division"
  | "subtraction"
  | "remainder";

export interface ChallengeResponse {
  id: string;
  operation: Operation;
  left: number;
  right: number;
}

export interface ResultBody {
  id: string;
  result: number;
}
