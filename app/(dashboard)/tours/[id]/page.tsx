import TourInfo from "@/components/TourInfo";
import { generateTourImage, getSingleTour } from "@/utils/actions";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import axios from "axios";

const url = `https://api.unsplash.com/search/photos?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&query=`;

const SingleTourPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const tour = await getSingleTour(params.id);

  if (!tour) {
    redirect("/tours");
  }

  //getting image from chatgpt
  // const tourImage = await generateTourImage({
  //   city: tour.city,
  //   country: tour.country,
  // });

  const { data } = await axios.get(`${url}${tour.city}`);
  const tourImage = data?.results[0]?.urls?.raw;

  return (
    <div>
      <Link href={`/tours`} className="btn btn-secondary mb-12">
        back to tours
      </Link>
      {tourImage ? (
        <div>
          <Image
            src={tourImage}
            alt="tour image"
            width={300}
            height={300}
            className="rounded-xl shadow-xl mb-16 h-96 object-cover"
            priority
          />
        </div>
      ) : null}
      <TourInfo tour={tour} />
    </div>
  );
};

export default SingleTourPage;
