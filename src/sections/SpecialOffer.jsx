import Button from "@/components/Button.jsx";
import { arrowRight } from "@/assets/icons";
import { offer } from "@/assets/images";

const Specialoffer = () => {
  return (
    <section className="max-container flex justify-between max-xl:flex-col-reverse items-center gap-10">
      <div>
        <img
          src={offer}
          alt="Shoe Promotion"
          width="773"
          height="687"
          className="object-contain w-full"
        />
      </div>
      <div>
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          Special <span className="text-coral-red">Offer</span>
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional. Navigate a realm of possibilities
          designed to fulfill your unique desires, surpassing the loftiest
          expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex gap-4">
          <Button label="View details" iconURL={arrowRight} />
          <Button label="Learn More" variant="secondary" iconURL={arrowRight} />
        </div>
      </div>
    </section>
  );
};

export default Specialoffer;
