"use client"

import NavTrailer from "@/components/custome/NavTrailer";
import Image from "next/image";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.main
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { ease: "easeOut" } }}
      className="h-screen "
    >
      <NavTrailer />

      <div className=" flex flex-col-reverse md:flex-row md:justify-evenly p-10  md:p-24  "  >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.2, type: "spring" } }}
          className="pt-10 md:pt-0"
        >
          <p className="text-xl text-muted-foreground mb-4 md:mb-10  text-center md:text-left">
            Intro
          </p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.4, type: "spring" } }}
            className="text-4xl md:text-5xl text-muted-foreground mb-10 text-center md:text-left">
            Marketing shit
          </motion.p>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.5, type: "spring" } }}
            className=" text-center md:text-left text-lg text-muted-foreground ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, fuga.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.6, ease: "easeIn" } }}
          className="ml-4 ">
          <Image
            src="/images/pexels-andrea-piacquadio-845451.jpg"
            className="shadow-2xl "
            width={600}
            height={400}
            alt="no one"
          />
        </motion.div>
      </div>

      <div className="description p-10  px-10 md:px-24 text-center md:text-left">
        <p className="text-center text-3xl text-muted-foreground mb-6">
          Title
        </p>
        {Array.from({ length: 7 }).map((_, index) => (
          <p className=" text-muted-foreground mb-4" key={index}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officiis nulla ad est cumque mollitia tempore magni consequatur, animi nihil sint eos voluptatem, doloremque culpa provident nisi modi iste quas.
          </p>
        ))}
      </div>

      <div className="additional_shit p-10  px-10 md:px-24 text-center md:text-left">
        <p className="text-center text-3xl text-muted-foreground mb-6">
          More shit
        </p>
        {Array.from({ length: 7 }).map((_, index) => (
          <p className=" text-muted-foreground mb-4" key={index}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officiis nulla ad est cumque mollitia tempore magni consequatur, animi nihil sint eos voluptatem, doloremque culpa provident nisi modi iste quas.
          </p>
        ))}
      </div>

    </motion.main>
  )
}
