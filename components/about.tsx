"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a highly motivated{" "}
        <span className="font-medium">Frontend Developer</span> with a
        background in{" "}
        <span className="font-medium italic">creative writing</span> that helped
        me to develop strong communication skills. In addition to my technical
        skills, I am a quick learner, eager to take on new challenges and always
        striving to improve my skills which I proved to myself by finishing the
        intensive <span className="underline"> HackYourFuture </span>bootcamp.
        and learned{" "}
        <span className="font-medium">full-stack web development</span>. My core
        stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Mysql and ExpressJS
        </span>
        . I am also familiar with{" "}
        <span className="font-medium"> TypeScript</span>. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. <span className="italic">When {`I'm`} not coding</span>, I
        work on my new novel, reding books and also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>{" "}
    </motion.section>
  );
}
