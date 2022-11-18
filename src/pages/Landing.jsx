import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import hero from '../assets/living-room.jpg';
import SocialMediaIcons from '../components/SocialMediaIcons';


const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="gap-16 py-10 md:flex md:justify-between md:items-center md:h-full">
      {/* IMAGE SECTION  */}
      <div className="flex justify-center mt-16 md:order-2 basis-3/5 md:mt-32">
        {isAboveMediumScreens ? (
          <motion.div
            className="flex flex-col items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div
              className="z-20 relative ml-20 before:absolute before:-top-[9%] before:-left-[7%]
                before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-4 before:border-gold before:z-[-1]"
            >
              <img src={hero} alt="" className="w-full max-w-[400px] md:max-w-[600px]" />
            </div>

          </motion.div>
        ) : (
          <div className="">
            <img src={hero} alt="" />
          </div>
        )}
      </div>

      {/* MAIN SECTION  */}

      <div className="z-30 mt-12 basis-2/5 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          className="flex flex-col items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-thin text-7xl">
            Swept Away
          </p>
          <p className="mt-10 text-md text-center font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eius
            deserunt amet quos omnis nihil nam repellendus veritatis.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex justify-center mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="py-3 px-7"
            onClick={() => setSelectedPage("contact")}
            href="contact"
          >
            Contact Me
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex justify-center mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  )
}

export default Landing;