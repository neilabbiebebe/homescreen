import {React} from "react";
import { FaGithub, FaYoutube, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
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
      <div className="flex justify-center mt-4">
        <h2 className="text-black mb-4">
          Made with <span className="mr-2" role="link" aria-label="heart">💘</span>by <a className="text-blue-500 hover:underline" href="chriselajel@gmail.com">Chrisela Jel</a>
        </h2>
      </div>
    </div>
  );
}

export default Footer;
