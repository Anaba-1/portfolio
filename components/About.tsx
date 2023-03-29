import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://scontent.facc5-2.fna.fbcdn.net/v/t39.30808-6/330443016_1647959272316479_6058407573893525068_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEk94NCMoQLT1j8tdwwh9AEoxMXMWdANGWjExcxZ0A0ZWPOlmt0kJnv0f_Dsb6s4sulDQ1UyIuHoMUa7vMsjfAx&_nc_ohc=8Ep8_wBa_bUAX8msSA2&_nc_zt=23&_nc_ht=scontent.facc5-2.fna&oh=00_AfC9Ojgk3EcNYmFe4icoHazMH6JUZdFgZf6dbprseLnbZA&oe=64239786"
        className="-mb-24 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[333px] xl:h-[400px]"
      />

      <div className="space-y-5 md:space-y-10 px-0 md:px-10">
        <h4 className="text-xl md:text-4xl font-semibold">
          {" "}
          Here is a{" "}
          <span className=" underline decoration-[#F7ABBA]/50">
            little
          </span>{" "}
          background
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          quisquam fugit earum? Pariatur, reprehenderit, dignissimos reiciendis
          aspernatur, doloribus non iure corporis quis inventore laboriosam
          suscipit molestias sapiente. Officia laboriosam consequuntur nulla rem
          ea ipsum aliquam, repellendus perspiciatis, voluptates cum culpa
          eveniet magni a amet ducimus vero. Voluptas, explicabo, numquam enim
          laudantium, illum eos soluta voluptatibus ipsum distinctio accusamus
          laborum possimus minus modi. Nisi quos laboriosam sunt dolorum
          blanditiis nihil consequuntur explicabo rem commodi debitis magnam qui
          cupiditate, doloribus quisquam dolores enim facere iste sint deserunt
          animi! Dolores blanditiis ipsa, ipsam fugit, recusandae hic ullam
          omnis quaerat id officia voluptatibus tenetur.
        </p>
      </div>
      </motion.div>
  );
}
