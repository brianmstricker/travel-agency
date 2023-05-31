import Image from "next/image";

const FavoriteLocations = () => {
  return (
    <section className="lg:mt-40 mt-[85rem] px-4 md:px-16 pb-8">
      <h1 className="text-center text-5xl text-dark">
        Travelers&apos; Favorite Locations
      </h1>
      <p className="text-center text-xl mt-3">
        Need help deciding where to go next? Take a look at some of our
        travelers’ recommended vacations.
      </p>
      <div className="mt-16 grid w-1/2 lg:w-full mx-auto lg:grid-cols-4 gap-4">
        <div className="grid h-min">
          <Image
            className="w-full h-full object-contain"
            src="/beach2.jpg"
            width={600}
            height={600}
            alt="location"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            quaerat deserunt impedit! Eum quo ratione possimus facere illum nemo
            doloribus fuga dignissimos architecto quos odio officia fugit optio
            accusantium, iure pariatur dolorem reiciendis maiores impedit
            veritatis. Modi possimus iusto perspiciatis odio esse. Suscipit vel
            excepturi id alias iste, voluptatibus et tempore ipsum eveniet!
            Delectus provident tempora voluptatum dolorem iure quos?
          </p>
        </div>
        <div className="grid h-min">
          <Image
            className="w-full h-full object-contain"
            src="/beach2.jpg"
            width={600}
            height={600}
            alt="location"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            nulla reprehenderit animi minus adipisci, eum quo perspiciatis ex
            optio voluptas omnis consectetur tempora obcaecati atque repudiandae
            consequatur repellat debitis dicta?
          </p>
        </div>
        <div className="grid h-min">
          <Image
            className="w-full h-full object-contain"
            src="/beach2.jpg"
            width={600}
            height={600}
            alt="location"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            nulla reprehenderit animi minus adipisci, eum quo perspiciatis ex
            optio voluptas omnis consectetur tempora obcaecati atque repudiandae
            consequatur repellat debitis dicta?
          </p>
        </div>
        <div className="grid h-min">
          <Image
            className="w-full h-full object-contain"
            src="/beach2.jpg"
            width={600}
            height={600}
            alt="location"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            nulla reprehenderit animi minus adipisci, eum quo perspiciatis ex
            optio voluptas omnis consectetur tempora obcaecati atque repudiandae
            consequatur repellat debitis dicta?
          </p>
        </div>
      </div>
    </section>
  );
};
export default FavoriteLocations;
