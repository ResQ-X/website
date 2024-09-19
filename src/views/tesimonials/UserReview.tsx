import { IUserReview } from "@/lib/models";
import { FC } from "react";

export const UserReview: FC<IUserReview> = (review: IUserReview) => {
  return (
    <div className="relative box-border flex shrink-0 flex-col items-start justify-start gap-4 rounded-radius-200 bg-white p-4 text-left font-body-medium-medium-heebo-14 text-sm text-text-text-body shadow-[0px_4px_25px_rgba(0,_0,_0,_0.12)]">
      <div className="flex w-full flex-row items-center justify-between ">
        <div className="flex flex-row items-center justify-start gap-2">
          <img
            className="relative h-8 w-8 rounded-[50%] object-cover"
            alt="Testifier Avatar"
            src={review.avatar}
          />
          <div className="flex flex-row items-center justify-start gap-2">
            <div className="relative font-medium leading-[150%]">
              {review.name}
            </div>
            <div className="relative h-0.5 w-0.5 rounded-[50%] bg-text-text-body" />
            <div className="relative leading-[150%]">{review.date}</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-1">
          <img
            className="relative h-6 w-6"
            alt=""
            src="/icons/star_duotone.png"
          />
          <img
            className="relative h-6 w-6"
            alt=""
            src="/icons/star_duotone.png"
          />
          <img
            className="relative h-6 w-6"
            alt=""
            src="/icons/star_duotone.png"
          />
          <img
            className="relative h-6 w-6"
            alt=""
            src="/icons/star_duotone.png"
          />
          <img
            className="relative h-6 w-6"
            alt=""
            src="/icons/star_duotone.png"
          />
        </div>
      </div>
      <div>
        <div className="font-raleway flex flex-col items-start justify-start gap-4">
          <div className="mb-4 tracking-[-0.02em] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] [display:-webkit-inline-box]">
            <p className="">{review.review}</p>
          </div>
          <div className="h-6 font-body-medium-medium-heebo-14 font-medium leading-[150%] text-darkslateblue">
            {review.location}
          </div>
        </div>
      </div>
    </div>
  );
};
