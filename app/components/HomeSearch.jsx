const HomeSearch = () => {
  return (
    <div className="absolute py-4 bottom-8 mb-[-35px] md:mb-0 md:bottom md:top-20 left-1/2 translate-x-[-50%] bg-white w-screen lg:w-[1000px] md:h-[150px] rounded-lg shadow-2xl md:py-2 md:drop-shadow-2xl">
      <div className="text-center">
        <h2 className="text-xl">
          Search for an <span className="font-bold">expert travel agent</span>{" "}
          in one or more of the following ways.
        </h2>
        <section className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between mt-10 px-16 items-center">
          <div>
            <h3 className="font-bold">LOCATION</h3>
            <div className="border-light border-2 cursor-pointer rounded-full px-2 py-[2px] mt-1">
              Select a Location
            </div>
          </div>
          <div>
            <h3 className="font-bold">ACTIVITY</h3>
            <div className="border-light border-2 cursor-pointer rounded-full px-2 py-[2px] mt-1">
              Choose an Activity
            </div>
          </div>
          <div>
            <h3 className="font-bold">PRICE</h3>
            <div className="border-light border-2 cursor-pointer rounded-full px-2 py-[2px] mt-1">
              Filter by Price
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default HomeSearch;
