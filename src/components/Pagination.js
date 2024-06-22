import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Pagination({ handleprev, handleNext, pageNo }) {
  return (
    <div className="bg-gray-400 p-4 mt-8 flex justify-center">
      <div
        onClick={handleprev}
        className="hover:cursor-pointer
          relative 
            before:content-[attr(data-tip)] 
            before:absolute 
            before:px-3 before:py-2 
            before:left-1/2 before:-top-3
            before:w-max before:max-w-xs 
            before:-translate-x-1/2 before:-translate-y-full 
            before:bg-gray-700 before:text-white 
            before:rounded-md before:opacity-0 
            before:transition-all
            
            after:absolute 
            after:left-1/2 after:-top-3
            after:h-0 after:w-0 
            after:-translate-x-1/2 after:border-8
            after:border-t-gray-700
            after:border-l-transparent 
            after:border-b-transparent 
            after:border-r-transparent 
            after:opacity-0 
            after:transition-all 
            
            hover:before:opacity-100 hover:after:opacity-100"
        data-tip="Prev"
      >
        <FaArrowLeft className="mr-5 mt-1" />
      </div>
      <div className="font-bold">{pageNo}</div>
      <div
        onClick={handleNext}
        className="hover:cursor-pointer
          relative 
            before:content-[attr(data-tip)] 
            before:absolute 
            before:px-3 before:py-2 
            before:left-1/2 before:-top-3
            before:w-max before:max-w-xs 
            before:-translate-x-1/2 before:-translate-y-full 
            before:bg-gray-700 before:text-white 
            before:rounded-md before:opacity-0 
            before:transition-all
            
            after:absolute 
            after:left-1/2 after:-top-3
            after:h-0 after:w-0 
            after:-translate-x-1/2 after:border-8
            after:border-t-gray-700
            after:border-l-transparent 
            after:border-b-transparent 
            after:border-r-transparent 
            after:opacity-0 
            after:transition-all 
            
            hover:before:opacity-100 hover:after:opacity-100"
        data-tip="Next"
      >
        <FaArrowRight className="ml-5 mt-1" />
      </div>
    </div>
  );
}

export default Pagination;
