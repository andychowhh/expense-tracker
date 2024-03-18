import React from "react";
import Image from "next/image";
import { CATEGORIES } from "@/constants";

const CategorySelectItem = ({
  label,
  imageUrl,
}: {
  label: string;
  imageUrl: string;
}) => {
  return (
    <button className="flex flex-col items-center basis-1/5 hover:bg-white">
      <Image src={imageUrl} alt={label} width={35} height={35} />
      <span className="text-sm">{label}</span>
    </button>
  );
};

export const CategorySelectGrid = () => {
  return (
    <div className="flex flex-wrap bg-gray-100 gap-y-2.5 p-2">
      {CATEGORIES.map(({ value, label, avatar }) => (
        <CategorySelectItem key={value} label={label} imageUrl={avatar} />
      ))}
    </div>
  );
};
