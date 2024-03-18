import React from "react";
import Image from "next/image";
import { CATEGORIES } from "@/constants";

const CategorySelectItem = ({
  label,
  value,
  imageUrl,
  isSelected,
  onClick,
}: {
  label: string;
  value: string;
  imageUrl: string;
  isSelected: boolean;
  onClick: (item: string) => void;
}) => {
  return (
    <button
      className={`flex flex-col items-center basis-1/5 ${
        isSelected ? "bg-white" : ""
      }`}
      onClick={(event) => {
        event.preventDefault();
        onClick(value);
      }}
    >
      <Image src={imageUrl} alt={label} width={35} height={35} />
      <span className="text-sm">{label}</span>
    </button>
  );
};

export const CategorySelectGrid = ({
  selectedOption,
  onChange,
}: {
  selectedOption: string;
  onChange: (item: string) => void;
}) => {
  return (
    <div className="flex flex-wrap bg-gray-100 gap-y-2.5 p-2">
      {CATEGORIES.map(({ value, label, avatar }) => (
        <CategorySelectItem
          key={value}
          label={label}
          value={value}
          imageUrl={avatar}
          isSelected={selectedOption === value}
          onClick={(item) => onChange(item)}
        />
      ))}
    </div>
  );
};
