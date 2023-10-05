import Button from "@/components/Button.jsx";

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between gap-10 items-center max-lg:flex-col">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin text-center font-bold">
        Sign Up for
        <span className="text-coral-red"> Updates</span> & Newsletter
      </h3>

      <div
        className="flex gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full
      w-full lg:max-w-[40%] max-sm:flex-col"
      >
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <Button label="Sign up" />
      </div>
    </section>
  );
};

export default Subscribe;
