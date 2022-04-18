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
        I'm Chrisela Jel Gaudicos Godarido. I am very good at adapting to different people. Sometimes, I take on a confident-boosting, friendly, and humorous attitude. I find this to be very helpful with friends who’ve just had a bad day. Other times I’m quiet and welcoming.I am a very kind, compassionate, sensitive. I have a tough shell but on the inside I am soft. I am also a very principled person and stand strong on what is right and wrong. I am also a very straight and honest person. I understand and know that we all put on a show sometimes and do not show who we really are or what we feel but some people do this constantly and those kinds of people I cannot stand.I Believe that everything happens in a particular reason so every steping stones I've  step I should  let my feet define my failures . I can let my failures teach me as who I am as a person.
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
