import Image from "next/image";

const ImageSection = () => {
  return (
    <section className="md:mt-[-12rem] mt-9 absolute w-screen">
      <div className="w-fit mx-auto flex gap-8">
        <Image
          src="/resort.jpg"
          width={300}
          height={300}
          alt="location"
          className="border border-white"
        />
        <Image
          src="/lake.jpg"
          width={300}
          height={300}
          alt="location"
          className="border border-white"
        />
        <Image
          src="/mountain.jpg"
          width={300}
          height={300}
          alt="location"
          className="border border-white"
        />
      </div>
    </section>
  );
};
export default ImageSection;
