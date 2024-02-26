import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      {/* LEFT */}

      {/* Title and description */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        /> */}
        <h1 className="bold-52 lg:bold-88">Sparrowhawk Trees</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsum
          incidunt repellendus expedita omnis, accusantium consequuntur nemo
          accusamus suscipit ut delectus cupiditate dolorum corrupti hic aliquid
          animi alias? Sapiente, unde? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Maxime optio repudiandae molestiae quasi magnam
          expedita vitae fuga eos soluta id, voluptates commodi excepturi aut
          fugit officia dolorum debitis mollitia rerum?
        </p>

        {/* Review stars*/}

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Get a Quote" variant="btn_green" />
          <Button
            type="button"
            title="What we do"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      {/* Map label */}
      <div className="relative flex flex-1 items-start ">
        <div className="relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">174.25 mi</p>
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">1.2 mi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
