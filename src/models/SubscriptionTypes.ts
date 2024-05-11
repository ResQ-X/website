// Subscription Plan
export interface ISubscriptionPlan {
  id: number;
  title: string;
  subTitle?: string;
  price: number;
  originalPrice?: number;
  features: string[];
  duration: string;
}
