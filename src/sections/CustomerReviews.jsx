import { CustomerReviewCard } from "@/components/CustomerReviewCard.jsx";
import { reviews } from "@/constants/index.js";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h2 className="font-palanquin text-center text-4xl font-bold">
        {" "}
        What our
        <span className="text-coral-red"> Customers </span> are saying
      </h2>
      <p className="mt-4 info-text max-w-lg text-center m-auto">
        {" "}
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex justify-evenly items-center max-lg:flex-col">
        {reviews.map((review) => (
          <CustomerReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
