import React from "react";
import Image from "next/image";

function ProfileImage({
  picture,
  size,
}: {
  picture: string;
  size: number | `${number}` | undefined;
}) {
  return (
    <div className="h-8 w-8 rounded-full relative">
      <Image
        src={picture}
        alt="user icon"
        height={size}
        width={size}
        objectFit="cover"
        className="rounded-full"
      />
    </div>
  );
}

export default ProfileImage;
