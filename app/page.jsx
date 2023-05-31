import Image from "next/image";
import beach from "../public/beach.jpg";
import HomeSearch from "./components/HomeSearch";
import ImageSection from "./components/ImageSection";
import FavoriteLocations from "./components/FavoriteLocations";

export default function Home() {
  return (
    <div className="">
      <div className="h-[735px] relative">
        <Image
          src={beach}
          alt="An image of a beautiful beach landscape"
          priority
          className="w-full h-full object-cover saturate-150"
        />
        <HomeSearch />
        <ImageSection />
        <FavoriteLocations />
      </div>
    </div>
  );
}
