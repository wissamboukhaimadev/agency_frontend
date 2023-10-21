"use client"
import NavTrailer from "@/components/custome/NavTrailer";
import { motion } from "framer-motion"

export default function About() {
    return (
        <div>
            <NavTrailer />

            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }}
                className="p-10"
            >
                <p className="text-center text-2xl">About Page</p>
                <p className="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit, corporis maxime perspiciatis odit error reiciendis iste sint ex nihil esse quaerat laudantium iusto laboriosam, modi soluta ea libero consectetur.</p>
            </motion.div>
        </div>
    )
}