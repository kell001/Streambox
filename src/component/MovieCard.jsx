
import { FaPlay } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { VscSave } from "react-icons/vsc";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MovieList } from "../data";
import { useState } from "react";

function MovieCard() {
    const [currentIndex, setCurrentIndex] = useState(3);

    const r = MovieList[currentIndex]

    const nextMovie =() =>{
        setCurrentIndex((r) => 
            r === MovieList.length -1? 0 : r + 1)
    }
    const prevMovie =() => {
        setCurrentIndex((s) =>
            s === MovieList.length -1? 0 : s + 1)
    }

    return (
        <section>
            {/* MovieCard */}
            <div className="flex gap-3 items-center justify-center p-5">
                {MovieList.map((movie, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <div
                            key={movie.id}
                            onClick={() => setCurrentIndex(index)}
                            className={`relative flex-shrink-0 cursor-pointer rounded-lg transition-all duration-500 ease-in-out ${isActive
                                    ? "h-72 w-56 scale-120 px-8"
                                    : "h-58 w-52 opacity-55 hover:opacity-100"
                                }`}
                        >
                            <img
                                src={movie.img}
                                alt={movie.title}
                                className="h-full w-full object-cover"
                            />
                            {isActive && (
                                <div className="absolute bottom-0 inset-0 top-80 left-0 right-0 bg-opacity-70" p-2>
                                    {/* <div className="border-2 border-black rounded-4xl "> */}
                                        <button className="bg-amber-300 border-4 absolute left-20 bottom-0 border-black hover:bg-amber-500 p-3 rounded-3xl">
                                            <FaPlay size={25}/>
                                        </button>

                                    {/* </div> */}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* MovieInformation */}
            <div className="text-white text-center mt-10">
                <h2 className="text-4xl">{r.title}</h2>
                <span className="text-lg py-3 mx-5">{r.description}</span>
                <div className="flex gap-3  justify-center mt-2 text-gray-300">
                    <span>{r.year}</span>•<span>{r.movieType}</span>•<span>{r.hours}</span>
                </div>
                <div className="flex gap-3 justify-center items-center py-3">
                    <h5 className="bg-gray-500 px-4 rounded-lg">Trailer</h5>
                    <FaHeart />
                    <VscSave />
                    <h6 className="bg-gray-500 px-4 rounded-lg">Details</h6>
                </div>
            </div>
            {/* MovieController */}
            <div className="flex items-center justify-end gap-3">
                <button 
                onClick={prevMovie}
                className="bg-gray-400 rounded-full p-2"><FaLongArrowAltLeft size={35}/></button>
                <button 
                onClick={nextMovie}
                className="bg-amber-400 rounded-full p-2"><FaLongArrowAltRight size={35}/></button>
            </div>

        </section>
    );
}

export default MovieCard