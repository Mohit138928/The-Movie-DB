import React from "react";
import WatchList from "./WatchList";

function MovieCard({
  poster_path,
  name,
  handleAddtoWatchList,
  movieObj,
  handleRemoveFromWatchList,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          className="m-4 flex justify-center items-center h-8 w-8 rounded-lg bg-gray-900/60
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
          data-tip="Remove From WatchList"
          onClick={() => handleRemoveFromWatchList(movieObj)}
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchList(movieObj)}
          className="m-4 flex justify-center items-center h-8 w-8 rounded-lg bg-gray-900/60
            
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
          data-tip="Add to WatchList"
        >
          &#128525;
        </div>
      )}

      <div className="rounded-b-xl text-white text-xl-base text-center w-full bg-gray-900/60 p-2 font-bold">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
