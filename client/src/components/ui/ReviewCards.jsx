import React from "react";

const ReviewCards = (props) => {
  return (
    <div className="flex flex-col gap-7 items-center justify-between">
      <p>{props.id}</p>
      <p>{props.star}</p>
      <p>{props.reviews}</p>
      <p>{props.name}</p>
    </div>
  );
};

export default ReviewCards;
