import React, { useEffect, useState } from "react";

const ResCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    avgRating,
    sla,
    cuisines,
    areaName,
    aggregatedDiscountInfoV3,
  } = props.resdata.info;

  // console.log(props.resdata)

  return (
    <div className="res-card">
      <div className="card-top-part">
          <div className="img-div">
              <img 
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
              
              ></img>
          </div>
          <div className="description-part">
            <h3>{aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}</h3>
          </div>
      </div>
      <div className="card-bottom-part">
         <div>
            <div className="res-name"><h4>{name}</h4></div>
            <div className="rat-sec">{avgRating}.{sla.slaString}</div>
         </div>
         <div className="dishes-area">
            <div><p>{cuisines.join(", ")}</p></div>
            <div><p>{areaName}</p></div>
         </div>
      </div>
    </div>
  );
};

export default ResCard;
