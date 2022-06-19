import { toJsonResponse } from '@common/json';

interface InputData {
  firstName?: string;
  surname?: string;
}

interface OutputData {
  fullName: string;
}

export const main = async (args: InputData) => {
  const fullName = [args.firstName || '', args.surname || ''].join(' ').trim();

  return toJsonResponse<OutputData>({
    fullName
  });
};
