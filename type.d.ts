declare interface ApiResponse {
  message: string;
  code: number | null;
  status: string;
  data?: any;
  error?: any;
}
