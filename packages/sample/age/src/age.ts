import { toJsonResponse } from '@common/json';

interface InputData {
  year?: number | string; // actually only comes through as string
}

interface OutputData {
  age: number;
}

const toNum = (input?: number | string) => {
  if (!Number.isNaN(Number(input))) return Number(input);
  return;
};

export const main = async (args: InputData) => {
  const birthYear = toNum(args.year) || 2000;
  const currentYear = new Date().getFullYear();

  return toJsonResponse<OutputData>({
    age: currentYear - birthYear
  });
};
