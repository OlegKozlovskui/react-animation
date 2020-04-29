import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <article>
      <h2 role="button" onClick={() => setIsToggled(!isToggled)}>The Heading</h2>
      <AnimatePresence>
        {isToggled &&
        <>
          <motion.div
            style ={{ overflow: 'hidden' }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eum ex exercitationem magnam minima nihil obcaecati rem ullam? Culpa cumque facilis harum hic ipsam iste maxime non, odio quae quos.
            </p>
          </motion.div>
        </>
        }
      </AnimatePresence>
    </article>
  );
};

export default Accordion;
