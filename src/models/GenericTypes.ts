export type SetStateForBoolean = React.Dispatch<React.SetStateAction<boolean>>;

// API Response Type
export interface IAPIResponseType<T> {
  currentPage: number;
  posts: T;
  totalPages: number;
}
