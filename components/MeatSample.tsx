import React from "react";
import Image from "next/image";
import Meat from "../public/media/Meat.png";

interface mealProps {
  name: string;
  price: string;
  url: string;
}

function MeatSample({
  name,
  url,
  price,
}: {
  name: string;
  price: string;
  url: string;
}) {
  return (
    <div className="shadow-md w-4/5 relative ">
      <div
        className="rounded-lg green p-1 w-full "
        style={{ backgroundColor: "", margin: 0 }}
      >
        <Image
          layout="responsive"
          width={400}
          height={250}
          // src={Meat}
          src={url}
          alt="photo"
          className="rounded-lg"
        />
      </div>
      <div className="absolute transform font-bold -translate-y-24 translate-x-1 glass-feel w-4/6 p-3 rounded-tr-lg rounded-bl-lg truncate ellipsis">
        <ul>
          <li>{name}</li>
          <li>${price}</li>
        </ul>
      </div>
    </div>
  );
}

export default MeatSample;
