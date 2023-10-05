import { products } from "@/constants/";
import PopularProductCard from "@/components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section className="max-sm:mt-12 max-container">
      <div
        className="flex flex-col justify-start 
      gap-5"
      >
        {" "}
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce vel nisl in elit congue vehicula. Cras et tincidunt
          dui.
        </p>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;

// export const products = [
//   {
//     imgURL: shoe4,
//     name: "Nike Air Jordan-01",
//     price: "$200.20",
//   },
//   {
//     imgURL: shoe5,
//     name: "Nike Air Jordan-10",
//     price: "$210.20",
//   },
//   {
//     imgURL: shoe6,
//     name: "Nike Air Jordan-100",
//     price: "$220.20",
//   },
//   {
//     imgURL: shoe7,
//     name: "Nike Air Jordan-001",
//     price: "$230.20",
//   },
// ];
