export interface apiResponse<T> {
  status: number;
  message: string;
  data: T;
}
