import React from "react";
import TourCard from "./TourCard";
import { JsonValue } from "@prisma/client/runtime/library";

interface TourlistProps {
  data: {
    // id: string;
    // city: string;
    // country: string;
    // createdAt: Date;
    description: string;
    // image: string | null;
    stops: JsonValue;
    title: string;
    // updatedAt: Date;
  }[];
}

const ToursList = ({ data }: { data: TourlistProps["data"] | undefined }) => {
  console.log("data", data);
  if (data?.length === 0) return <h4 className="text-lg">No tours found...</h4>;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {data?.map((tour) => {
        return <TourCard key={tour.id} tour={tour} />;
      })}
    </div>
  );
};

export default ToursList;
