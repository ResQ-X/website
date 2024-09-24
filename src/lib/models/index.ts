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

export interface IAdditionalService {
  image: string;
  title: string;
  description: string;
}

export interface IWhyWork {
  title: string;
  description: string;
}

export interface IVacancy {
  role: string;
  deadline: string;
}

export interface IMembershipPlan {
  price: string;
  benefitList: string[];
  type: string;
  url: string;
  customClassName: string;
  paddingTop?: string;
  paddingBottom?: string;
}

export interface IPartnerHowItWorks {
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface IKeyBenefit {
  image: string;
  title: string;
  description: string;
}

export interface IService {
  title: string;
  description: string;
  image: string;
  reverse: boolean;
}

export interface ITeam {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}