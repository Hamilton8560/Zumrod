import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Fitness Coach</span>
            <h1 className="h1 mb-6">
              Welcome! I&apos;m <br /> <span className="text-accent">Zumrod Tebra</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I specialize in helping individuals achieve their fitness goals through personalized training sessions and comprehensive fitness programs. Book a one-on-one session or explore my tailored fitness programs to get started on your journey!
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
              href="http://program.zumrod.pro/"
                // href="https://calendly.com/davidhamilton473/fitness-consultation" // Replace with your Calendly link
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase flex items-center gap-2 px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-500"
              >
                <span>Start Program</span>
                <FiDownload className="text-xl" />
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
