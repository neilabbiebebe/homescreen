import {React} from "react";
import { SiApplemusic } from "react-icons/si";
import { MdSportsScore } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { FaBook } from "react-icons/fa";

function Skills() {
  return (
    <div className='max-w-4xl mx-auto justify-center py-12' id="hobby">
      <p className="text-2xl text-black text-center sm:text-4xl pt-4 font-bold">
        Hobbies
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiApplemusic color="#fc3c44" className="mx-auto text-4xl" />
          <h2 className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Music
          </h2>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <MdSportsScore color="#0000FF" className="mx-auto text-4xl" />
          <h2 className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Sport
          </h2>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <AiFillCar color="#00c0e7" className="mx-auto text-4xl" />
          <h2 className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Adventure
          </h2>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaBook color="#264f9b" className="mx-auto text-4xl" />
          <h2 className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Books
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Skills;
