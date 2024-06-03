"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"

export default function IndexPage() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          hello 👋
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
        I&apos;m a Salesforce and web app developer by trade. I&apos;m also a father, adventurer, and music producer. Give me a 
        <a href={`mailto: ${siteConfig.email}`}> shout</a> if you want to chat.
        </p>
      </div>
      <div className="flex gap-4">
      </div>
    </section>
    </motion.div>
  )
}
