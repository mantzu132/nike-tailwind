import { star } from "@/assets/icons/index.js";

export function CustomerReviewCard({ imgURL, feedback, customerName, rating }) {
  return (
    <div className=" flex flex-col items-center justify-center">
      <img
        src={imgURL}
        className="rounded-full object-cover w-[120px] h-[120px]"
        alt="customer image"
      />
      <p className="mt-6 text-center max-w-sm info-text">{feedback}</p>
      <div className="flex justify-center items-center gap-2.5">
        <img src={star} alt="star icon" />

        {rating}
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
}
