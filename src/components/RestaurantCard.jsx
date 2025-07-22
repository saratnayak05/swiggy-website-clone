import { CLOUDINARY_ID } from "../utils/constant";
import star from "../assets/ratingStar.svg";

const RestaurantCard = (props) => {
  console.log(props);
  const {
    name,
    cloudinaryImageId,
    avgRating,
    avgRatingString,
    sla,
    cuisines,
    areaName,
    aggregatedDiscountInfoV3,
  } = props.resdata.info;

  return (
    <div className="res-card flex flex-col gap-2 transition-transform duration-300 ease-in-out hover:scale-95 cursor-pointer">


      <div className="res-card-top  relative h-45 card-top-part rounded-2xl overflow-hidden">
        <img
          src={CLOUDINARY_ID + cloudinaryImageId}
          alt="img"
          className="  h-full w-full object-cover"
        ></img>
        <div className="vignette-effect  absolute bottom-0  w-full h-1/3 bg-gradient-to-b from-transparent to-black pointer-events-none" />
        <div className="offer-part absolute bottom-1 left-2 text-amber-50 text-xl font-extrabold ">
          <p>
            {aggregatedDiscountInfoV3?.header}{" "}
            {aggregatedDiscountInfoV3?.subHeader}
          </p>
        </div>
      </div>

      <div className="res-card-bottom pl-3">
        <div className="name-rating-part text-lg/tight">
          <div className="res-name font-bold  w-full whitespace-nowrap overflow-hidden text-ellipsis ">
            <span>{name}</span>
          </div>
          <div className="rating-sec flex  gap-1 items-center">
            <img
              src={star}
              className="rounded-2xl bg-green-700 p-[1px] h-4 w-4"
            ></img>
            <span>
              {avgRatingString} •{" "}
              <span className=" font-semibold text-md">{sla.slaString}</span>
            </span>
          </div>
        </div>
        <div className="items-location text-gray-500 font-">
          <div className=" w-full whitespace-nowrap overflow-hidden text-ellipsis ">
            {cuisines.join(", ")}
          </div>
          <div>
            <p>{areaName}</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default RestaurantCard;
