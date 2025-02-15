"use client"

import { motion } from "framer-motion"

const MusicPage = () => {
    return (
        <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
      <div className="container mx-auto px-4 py-8">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            width="100%"
            height="450"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1969762884&color=%23d8c6be&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
          </div>
      </div>
      </motion.div>
    );
  };
  
  export default MusicPage;
