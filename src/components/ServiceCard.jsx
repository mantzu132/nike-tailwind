export function ServiceCard({ imgURL, label, subtext }) {
  return (
    <div
      className="min-w-[250px] flex-1 rounded-[20px] shadow-3xl
     px-10 py-16"
    >
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt="truck" width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {" "}
        {label}{" "}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {" "}
        {subtext}{" "}
      </p>
    </div>
  );
}
