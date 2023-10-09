import React, { ReactNode } from "react";
import Image from "next/image";
import Emoji from "./Emoji";

interface CenteredTextProps {
  title: string;
  text: string;
  children?: ReactNode;
}

const CenteredText: React.FC<CenteredTextProps> = ({
  title,
  text,
  children,
}) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="m-3">
        <Image
          src="/shelter-logo.png"
          width={100}
          height={100}
          alt="Shelter Logo"
        />
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg text-gray-600">
          <Emoji label="Round Pushpin" symbol="📍&nbsp;" />
          {text}
        </p>
      </div>
      {children}
    </div>
  );
};

export default CenteredText;
