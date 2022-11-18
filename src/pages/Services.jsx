import LineGradient from "../components/LineGradient";
import { services } from '../data';
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Service = () => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-70 transition duration-500
    bg-black z-30 flex flex-col justify-center items-center text-center p-16 text-white font-semibold`;

  return (
    <>
    {services.map(service => (
    <motion.div variants={projectVariant} key={service.id} className="relative max-w-[375px] max-h-[375px] bg-gold">
      <div className={overlayStyles}>
        <h1>{service.title}</h1>
        <p>{service.price}</p>
      </div>
      <img src={service.img} alt={service.title} />
    </motion.div>
    ))}
    </>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-28">
      <motion.div
        className="mx-auto text-center md:w-2/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="">
          <p className="text-6xl font-semibold font-caveat">
            My <span className="text-bronze">Services</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-full mb-6" />
          </div>
        </div>
      </motion.div>
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-gold
              max-w-[375px] max-h-[375px] text-2xl font-normal"
          >
            SERVICES & PRICES
          </div>

          <Service />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;