export class ResponseHandler {
    statusCode!: number;
    data?: any;
    code?: string;
    message?: string;
    timestamp?: string;
  
    constructor(data: Partial<ResponseHandler>) {
      Object.assign(this, data);
    }
  }
  