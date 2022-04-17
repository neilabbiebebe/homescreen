import React from "react";
import { FaChevronDown } from "react-icons/fa";
import Scroll  from "react-scroll-into-view";

function About() {
  return (
    <div className="max-w-4xl mt-20 mx-auto">
      <p className="text-2xl text-black md:text-4xl font-bold text-center">
        Holla👋
      </p>
      <h2 className="text-base sm:text-xl text-center text-gray-600 leading-relaxed mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi
        dolorum ipsa natus vero modi doloremque quia veritatis excepturi
        accusamus in a recusandae incidunt maxime magnam, placeat saepe eveniet
        quibusdam voluptates atque neque perferendis dignissimos ullam!
        Doloremque vel sequi fugit animi odit eaque, molestiae nesciunt, itaque
        magni laboriosam esse est.
      </h2>
      <Scroll selector="#hobby">
        <div className="mx-auto p-20">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-gray-500" />
        </div>
      </Scroll>
    </div>
  );
}

export default About;
