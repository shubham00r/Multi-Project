import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Congratulations = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full">
        <AiOutlineCheck className="text-3xl text-white" />
      </div>
      <h1 className="flex items-center gap-2 mt-4 text-2xl font-bold text-gray-800">
        Congratulations! 🎉
      </h1>
      <p className="mt-2 text-center text-gray-600">
        Your profile has been created and you are now ready to start
        participating in challenges that match your interests and coding
        experience level.
      </p>
    </div>
  );
};

export default Congratulations;
