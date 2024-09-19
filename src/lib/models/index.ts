export interface ServerResponseModel {
  status: string;
  statusCode: number;
  message: string;
  timestamp: string;
}

export interface OfferingModel {
  image: string;
  title: string;
  description: string;
}


export interface IUserReview {
  avatar: string;
  name: string;
  date: string;
  review: string;
  location: string;
}

export interface ICoreValue {
  image: string;
  title: string;
  description: string;
}