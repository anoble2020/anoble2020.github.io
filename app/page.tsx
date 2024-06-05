"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"
import { useSwipeable } from 'react-swipeable';
import { useRouter } from 'next/navigation';

export default function IndexPage() {
  const router = useRouter();

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      console.log('Swiped left');
      router.push('/projects')
    },
    // Add more handlers for other directions if needed
  });
  return (
    <div {...handlers}>
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          hello there &nbsp;
          <motion.span
              animate={{ rotate: [0, 20, 0, -20, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease:"easeOut"}}
              style={{ display: 'inline-block' }}
            >
              👋
            </motion.span>
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
        I&apos;m a Salesforce (and web/mobile app) developer by trade, working @ <a href="https://neuraflash.com"><b>Neuraflash</b></a>. I&apos;m also a father, adventurer, and music producer. Give me a{' '} 
        <motion.a href={`mailto: ${siteConfig.email}`}>
        <motion.button
          style={{
            outline: 'none',
            display: 'inline-block',
            lineHeight: 'normal',
            height: 'auto',
            verticalAlign: 'middle', // Add this line to vertically align the button
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="hover:mx-1 align-middle" // Add the 'align-middle' class
        >        
          <b>shout</b>
        </motion.button>
        </motion.a>{' '}if you want to chat.
        </p>
      </div>
      <div className="flex gap-4">
      </div>
    </section>
    </motion.div>
    </div>
  )
}
