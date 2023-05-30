import Image from "next/image";
import beach from "../public/beach.jpg";
import HomeSearch from "./components/HomeSearch";
import ImageSection from "./components/ImageSection";

export default function Home() {
  return (
    <div className="">
      <div className="h-[700px] relative">
        <Image
          src={beach}
          alt="An image of a beautiful beach landscape"
          priority
          className="w-full h-full object-cover saturate-150"
        />
        <HomeSearch />
        <ImageSection />
      </div>
    </div>
  );
}
