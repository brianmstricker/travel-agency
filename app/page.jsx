import Image from "next/image";
import beach from "../public/beach.jpg";

export default function Home() {
  return (
    <>
      <div className="h-[700px]">
        <Image
          src={beach}
          alt="An image of a beautiful beach landscape"
          priority
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}
