import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";
import { FaMobileAlt } from "react-icons/fa";
import { LuDatabase } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";
import { FiServer } from "react-icons/fi";
import { FaRegFileCode } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";
import { SiXcode } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";
import { SiPostman } from "react-icons/si";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          {/* left box */}
          <div className="left flex-1 w-full">
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar
                  logo={<LuDatabase />}
                  name={"MongoDB"}
                  value={90}
                />
                <ProgressBar
                  logo={<FaMobileAlt />}
                  name={"React Native"}
                  value={95}
                />
                <ProgressBar
                  logo={<CiGlobe />}
                  name={"React / Next Js"}
                  value={95}
                />
                <ProgressBar
                  logo={<FiServer />}
                  name={"Node / Express Js"}
                  value={85}
                />
                <ProgressBar
                  logo={<FaRegFileCode />}
                  name={"JavaScript / TypeScript"}
                  value={90}
                />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<TbBrandVscode />}
                black={"white"}
                white={"black"}
                skill={"VS Code"}
              />
              <SkillBox
                logo={<SiXcode />}
                black={"black"}
                white={"white"}
                skill={"xCode"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiAndroidstudio />}
                black={"black"}
                white={"white"}
                skill={"Android Studio"}
              />
              <SkillBox
                className=""
                logo={<SiPostman />}
                black={"white"}
                white={"black"}
                skill={"Postman"}
              />
            </div>
          </div>
        </div>

        {/* icons */}
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className="container m-auto flex flex-wrap items-center justify-center mt-8 gap-8 md:gap-5 max-w-full"
        >
          <img
            title="React Native"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/?size=256&id=YYYhFVbH4vFv&format=png"
          />

          <img
            title="React Js"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/?size=256&id=t5K2CR8feVdX&format=png"
          />
          <img
            title="Next Js"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/?size=256&id=MWiBjkuHeMVq&format=png"
          />

          <img
            title="Node Js"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/?size=256&id=54087&format=png"
          />
          <img
            title="MongoDB"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/?size=256&id=8rKdRqZFLurS&format=png"
          />
          <img
            title="JavaScript"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/?size=256&id=PXTY4q2Sq2lG&format=png"
          />
          <img
            title="TypeScript"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/?size=256&id=uJM6fQYqDaZK&format=png"
          />
          <img
            title="Tailwind CSS"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/?size=256&id=CIAZz2CYc6Kc&format=png"
          />
          <img
            title="Git"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/?size=256&id=38389&format=png"
          />
          <img
            title="Digital Ocean"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/?size=50&id=113621&format=png"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
