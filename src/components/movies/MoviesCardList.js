import React from "react";
import './MoviesCardList.css';
import MoviesCard from "./MoviesCard";

function MoviesCardList(){

    return(
        <>
        <section className='card-list'>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
       </section>

                <button className='card-list__button' type='button' onClick=''>
                    Еще
                </button>
        </>
    )
}
export default MoviesCardList;