import React, { useState } from "react";
import bigImage1 from "../../images/image-product-1.jpg";
import bigImage2 from "../../images/image-product-2.jpg";
import bigImage3 from "../../images/image-product-3.jpg";
import bigImage4 from "../../images/image-product-4.jpg";
import image1 from "../../images/image-product-1-thumbnail.jpg";
import image2 from "../../images/image-product-2-thumbnail.jpg";
import image3 from "../../images/image-product-3-thumbnail.jpg";
import image4 from "../../images/image-product-4-thumbnail.jpg";
import previous from "../../images/icon-previous.svg";
import next from "../../images/icon-next.svg";
export default function ProductGallery() {
  const images = [
    { id: 1, url: { big: bigImage1, small: image1 } },
    { id: 2, url: { big: bigImage2, small: image2 } },
    { id: 3, url: { big: bigImage3, small: image3 } },
    { id: 4, url: { big: bigImage4, small: image4 } },
  ];
  const [counter, setCounter] = useState(0);
  function getNextImage() {
    if (counter + 1 > images.length - 1) return;
    setCounter(counter + 1);
  }
  function getPrevImage() {
    if (counter - 1 < 0) return;
    setCounter(counter - 1);
  }
  function changeImage(e) {
    e.stopPropagation();
    const found = images.find((image) => image.id == e.target.id);
    let main = document.getElementById("mainImage");
    main.src = found.url.big;
  }
  return (
    <div className="flex flex-col justify-between w-5/12 gap-y-10">
      <div className="relative">
        <img
          id="mainImage"
          className="w-full rounded  "
          src={images[counter].url.big}
          alt="view"
        />
        <span
          onClick={getPrevImage}
          className="text-xs absolute  inset-y-2/4  left-0"
        >
          <img
            className=" bg-white  rounded-full w-8 h-8 text-xs transform -translate-x-1/2 "
            src={previous}
            alt="previous"
          />
        </span>
        <span
          onClick={getNextImage}
          className="absolute  inset-y-2/4  right-0  "
        >
          <img
            className="  bg-white  rounded-full w-8 h-8  transform translate-x-1/2 "
            src={next}
            alt="next"
          />
        </span>
      </div>
      <div className="flex w-full justify-between">
        {images.map((image) => (
          <img
            id={image.id}
            onClick={changeImage}
            src={image.url.small}
            alt="image1"
          />
        ))}
      </div>
    </div>
  );
}
