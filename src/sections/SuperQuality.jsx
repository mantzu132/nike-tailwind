import Button from "@/components/Button";
import { shoe8 } from "@/assets/images";

const SuperQuality = () => {
  return (
    <section className="flex justify-between items-center max-container gap-10 max-lg:flex-col">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes{" "}
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          {" "}
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />{" "}
        </div>
      </div>
      <div>
        <img
          src={shoe8}
          alt="product detail"
          width="570"
          height="522"
          className=""
        />
      </div>
    </section>
  );
};

export default SuperQuality;
