import Photo from "@/components/photo";
import Socials from "@/components/socials";
import Stats from "@/components/stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="order-2 xl:order-none text-center xl:text-left">
            {/* text */}
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Huy Dang</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I&apos;m enthusiastic about embracing current tech trends and
              creating amazing solutions, drawing from my experience in various
              projects!
            </p>
            {/* socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/huydang-fullstack-cv.pdf" download>
                <Button variant="outline" size="lg" className="uppercase">
                  <span>Download CV</span>
                  <FiDownload className="ms-2 text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent text-accent text-base flex items-center justify-center rounded-md
                  hover:bg-accent hover:text-primary dark:hover:bg-accent-hover dark:hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home;
