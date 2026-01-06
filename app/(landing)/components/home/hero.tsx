import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero-section" className="container mx-auto min-h-screen flex px-4 md:px-0 relative overflow-hidden md:overflow-visible">
      <div className="relative self-center w-full flex flex-col md:block">
        {/* Decorative Background Basketball */}
        <Image
          src="/images/img-basketball.png"
          width={432}
          height={423}
          alt="image sporton"
          className="grayscale absolute opacity-20 md:opacity-100 -left-20 -top-20 w-40 md:w-[432px] -z-10"
        />

        <div className="relative ml-0 md:ml-40 w-full md:w-2/3 z-10 text-center md:text-left pt-20 md:pt-0">
          <div className="text-primary italic font-semibold">Friday Sale, 50%</div>
          <h1 className="font-extrabold text-[45px] sm:text-[60px] lg:text-[95px] italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent uppercase">
            WEAR YOUR <br className="hidden md:block" /> TOP-QUALITY <br className="hidden md:block" /> SPORTSWEAR
          </h1>
          <p className="w-full md:w-1/2 mt-6 md:mt-10 leading-loose text-gray-600">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-5 mt-10 md:mt-14">
            <Button>
              Explore More <FiFastForward />
            </Button>
            <Button variant="ghost">
              Watch Video{" "}
              <Image
                src="/images/icon-play-video.svg"
                alt="icon playvideo"
                width={29}
                height={29}
              />
            </Button>
          </div>
        </div>

        {/* Main Hero Image */}
        <Image
          src="/images/img-hero.png"
          width={700}
          height={950}
          alt="image sporton hero"
          className="relative md:absolute mx-auto md:mx-0 -right-0 lg:-right-5 top-0 md:top-1/2 md:-translate-y-1/2 w-[300px] md:w-[500px] lg:w-[700px] mt-10 md:mt-0 -z-10"
        />
      </div>

      {/* Ornament */}
      <Image
        src="/images/img-ornament-hero.svg"
        width={420}
        height={420}
        alt="image sporton"
        className="absolute hidden lg:block -right-[400px] top-1/2 -translate-y-1/2 -z-20"
      />
    </section>
  );
};

export default HeroSection;