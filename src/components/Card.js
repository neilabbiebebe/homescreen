import {React} from "react";
import ReactTypingEffect from "react-typing-effect";
import profile from "../assets/mylogo.png";
import { FaGithub, FaYoutube, FaTwitter, FaEnvelope } from "react-icons/fa";

function Card() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
            src={profile}
            alt="Profile Photo"
          />
        </div>
        <div className="text-center mt-5">
          <h1 className="text-xl sm:text-2xl text-gray-900 font-semibold">
            <ReactTypingEffect
              text={["Chrisela Jel Godarido"]}
              typingDelay={1500}
              eraseSpeed={50}
              cursorRenderer={(cursor) => <h1>{cursor}</h1>}
              displayTextRenderer={(text, i) => {
                return (
                  <h1>
                    {text.split("").map((char, i) => {
                      const key = `${i}`;
                      return <span key={key}>{char}</span>;
                    })}
                  </h1>
                );
              }}
            />
          </h1>

          <h2 className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            Web Developer
          </h2>

          <div className="flex align-center justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href="*"
            >
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>

            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300"
              href="*"
            >
              <FaYoutube />
              <span class="sr-only">Youtube</span>
            </a>

            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
              href="*"
            >
              <FaTwitter />
              <span class="sr-only">Twitter</span>
            </a>

            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-black-500 hover:bg-green-600 rounded-full hover:text-white transition-colors duration-300"
              href="*"
            >
              <FaEnvelope />
              <span class="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
