const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl
  ${
    imgURL.bigShoe === bigShoeImg
      ? "border-coral-red"
      : "border-transparent"
  }
  cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className="flex justify-center items-center
      bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl
      max-sm:p-4"
      >
        <img
          src={imgURL.thumbnail}
          alt="shoe Collections"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

//  imgURL =  {
//     thumbnail: thumbnailShoe1, small img url
//     bigShoe: bigShoe1, large img url
//   }
//

//bigShoeImage = current big shoe on the hero section

export default ShoeCard;
