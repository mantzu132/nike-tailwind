import { arrowRight } from "@/assets/icons";
import Button from "@/components/Button";
import { shoes, statistics } from "@/constants";
import { bigShoe2 } from "@/assets/images";
import ShoeCard from "@/components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe2);
  return (
    <section
      id="home"
      className="w-full  
      flex xl:flex-row flex-col justify-center min-h-screen gap-10
       max-container"
    >
      <div
        className="relative xl:w-2/5 flex flex-col 
       justify-center items-start w-full max-xl:padding-x
       pt-28 "
      >
        <p className="text-xl font-montserrat text-coral-red">
          {" "}
          Our summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
          {" "}
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>{" "}
        <p
          className="font-montserrat text-slate-gray text-lg leading-8 pt-6
         pb-14 sm:max-w-sm"
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div
          className=" flex justify-start items-start
        flex-wrap w-full gap-16 mt-20"
        >
          {statistics.map((statistic, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">
                {statistic.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative flex-1 flex justify-center
       items-center xl:min-h-screen
       max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
      >
        <img
          src={bigShoeImg}
          alt="big shoe"
          width={610}
          height={500}
          className="object-contain
        relative z-10"
        />

        <div
          className="flex sm:gap-6 gap-4 
        absolute -bottom-[5%] sm:left-[10%]
        max-sm:px-6"
        >
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={setBigShoeImg}
                bigShoeImg={bigShoeImg}
                // current big shoe img on dispay
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
