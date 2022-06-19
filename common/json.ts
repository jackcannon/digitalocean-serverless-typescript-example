export interface FuncResponse {
  headers?: { [header: string]: string };
  body?: string;
}

export const toJsonResponse = <T extends unknown>(data: T): FuncResponse => ({
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});
