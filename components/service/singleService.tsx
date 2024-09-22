import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

export function SingleService({ service }: { service: any }) {
  return (
    <div className="my-12 mx-8">
      <div className="max-w-[960px] mx-auto">
        {/* <Image */}
        {/* <Image
          src={"https://image.tmdb.org/t/p/w500" + service.backdrop_path}
          width={300}
          height={300}
          className="h-auto max-w-full rounded-t-lg w-full"
          alt="project-image"
        /> */}

        <img
          src={"/images/" + service.image}
          className="h-auto max-w-full rounded-t-lg w-full"
        />

        {/* <p className="mt-4">{service.title}</p> */}
        <p className="mt-6">{service.description}</p>

        {/* <ul className="my-4">
          <li className="mb-3 flex items-center gap-2">
            <FaCheck color="#ffa500" />
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </p>
          </li>
          <li className="mb-3 flex items-center gap-2">
            <FaCheck color="#ffa500" />
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </p>
          </li>
          <li className="mb-3 flex items-center gap-2">
            <FaCheck color="#ffa500" />
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </p>
          </li>
          <li className="flex items-center gap-2">
            <FaCheck color="#ffa500" />
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </p>
          </li>
        </ul> */}
      </div>
    </div>
  );
}
