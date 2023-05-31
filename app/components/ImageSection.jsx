import Image from "next/image";

const ImageSection = () => {
  return (
    <section className="lg:mt-[-17rem] mt-9 absolute w-screen sm:px-4">
      <div className="w-fit mx-auto flex flex-col lg:flex-row gap-8 lg:gap-4">
        <div className="relative">
          <Image
            src="/resort.jpg"
            width={600}
            height={600}
            alt="location"
            className="border-2 border-neutral-200 rounded lg:w-[400px] lg:h-[300px] sm:w-[600px] sm:h-[400px] w-[300px] h-[200px]"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 opacity-0 hover:opacity-100 hover:bg-black/80 transition-all">
            <p className="absolute text-4xl text-white top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-bold">
              Resorts
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/lake.jpg"
            width={600}
            height={600}
            alt="location"
            className="border-2 border-neutral-200 rounded lg:w-[400px] lg:h-[300px] sm:w-[600px] sm:h-[400px] w-[300px] h-[200px]"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 opacity-0 hover:opacity-100 hover:bg-black/80 transition-all">
            <p className="absolute text-4xl text-white top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-bold">
              Camping
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/mountain.jpg"
            width={600}
            height={600}
            alt="location"
            className="border-2 border-neutral-200 rounded lg:w-[400px] lg:h-[300px] sm:w-[600px] sm:h-[400px] w-[300px] h-[200px]"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 opacity-0 hover:opacity-100 hover:bg-black/80 transition-all">
            <p className="absolute text-4xl text-white top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-bold">
              Cabins
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ImageSection;
