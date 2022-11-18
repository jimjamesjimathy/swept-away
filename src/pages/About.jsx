import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import about from "../assets/about.jpg";

const About = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="about" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="mt-32 md:flex md:justify-between md:gap-16">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="mb-5 text-6xl font-semibold font-caveat">
            About Me
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
            quaerat provident aliquam ipsam autem enim dolorem qui consectetur
            pariatur.
          </p>
        </motion.div>
        <div className="flex justify-center mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
            before:w-full before:h-full before:border-2 before:border-gold before:z-[-1]"
            >
              <img alt="about" src={about} className="w-full max-w-[400px] md:max-w-[600px]" />
            </div>
          ) : (
            <img alt="about" src={about} className="w-full max-w-[400px] md:max-w-[600px]" />
          )}
        </div>
      </div>

      <div className="gap-32 mt-16 md:flex md:justify-between">
        {/* SKILLS */}
        <motion.div
          className="mt-10 md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="text-2xl font-thin">1</p>
              <p className="mt-3 text-5xl font-thin font-caveat">Experience</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1] bg-gold" />
          </div>
          <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eum reprehenderit repellendus, rerum provident aperiam incidunt quibusdam enim asperiores debitis harum laudantium accusantium tempora quo. Sint minima voluptas sequi magnam!</p>
        </motion.div>

        <motion.div
          className="mt-10 md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="text-2xl font-thin ">2</p>
              <p className="mt-3 text-5xl font-thin">Refrences</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1] bg-maroon" />
          </div>
          <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eum reprehenderit repellendus, rerum provident aperiam incidunt quibusdam enim asperiores debitis harum laudantium accusantium tempora quo. Sint minima voluptas sequi magnam!</p>
        </motion.div>

        <motion.div
          className="mt-10 md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="text-2xl font-thin ">3</p>
              <p className="mt-3 text-5xl font-thin font-caveat">Innovative</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1] bg-lightBlue" />
          </div>
          <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eum reprehenderit repellendus, rerum provident aperiam incidunt quibusdam enim asperiores debitis harum laudantium accusantium tempora quo. Sint minima voluptas sequi magnam!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;