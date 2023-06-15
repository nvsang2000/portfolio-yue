import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";
import { useTranslation } from "react-i18next";
import { LANGUAGE_DESCRIPTION, SPLIT_STRING } from "~/constants";

const Details = ({ type, time, place, info }: any) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
    <LiIcon reference={ref}/>
    <motion.div
     initial={{y:50}}
     whileInView={{y:0}}
     transition={{duration:0.5,type:"spring"}}>

      <h3 className="capitalize font-bold text-3xl sm:text-xl xs:text-lg">{type}</h3>
      <span className="capitalize font-medium text-dark/75 dark:text-primaryDark/75 xs:text-sm">
        {time}|{place}
      </span>
      <p className="font-medium w-full md:text-sm">{info}</p>
    </motion.div>
    </li>
  );
};

const WorkExperience = () => {
  const { t } = useTranslation();
  const workExperiencePlan1 = t(LANGUAGE_DESCRIPTION.about_work_experience_plan_1)
  const workExperiencePlan2 = t(LANGUAGE_DESCRIPTION.about_work_experience_plan_2)
  const ref1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["start end", "center start"],
  });
  useEffect(() => {
    console.log("scrollYprogress: ", scrollYProgress);
  }, [scrollYProgress]);
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mt-64 mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">
        {t(LANGUAGE_DESCRIPTION.work_experience)}
      </h2>

      <div ref={ref1} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{scaleY:scrollYProgress}}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primary md:w-[2px] md:left-[30px] xs:left-[20px]" 
        />

        <ul className="w-full flex flex-col items-start justify-between xs:ml-2">
          <Details
            type="UFO Technology and trading company limited"
            time="July 2022 - February 2023 "
            place=" Frontend Developer"
            info={
              workExperiencePlan1.split(SPLIT_STRING).map((value, index) => {
                return(
                  <div key={index}>{value}</div>
                )
            })}
          />
          <Details
            type="Conceptcube Viet Nam company limited"
            time="January 2022 - September 2022 "
            place=" Android / Backend Developer"
            info={
              workExperiencePlan2.split(SPLIT_STRING).map((value, index) => {
                return(
                  <div key={index}>{value}</div>
                )
            })}
          />
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
