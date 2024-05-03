import { JsonValue } from "@prisma/client/runtime/library";
import React from "react";

interface TourInfoProps {
  tour: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    city: string;
    country: string;
    title: string;
    description: string;
    image: string | null;
    stops: JsonValue | any;
  };
}

const TourInfo = ({ tour }: TourInfoProps | any) => {
  const { title, description, stops } = tour;
  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-semibold mb-4">{title}</h1>
      <p className="leading-loose mb-6">{description}</p>
      <ul>
        {stops?.map((stop: any) => {
          return (
            <li key={stop} className="mb-4 bg-base-100 p-4 rounded-xl">
              <p>{stop}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TourInfo;
