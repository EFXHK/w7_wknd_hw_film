import React, { useState, useEffect } from "react";
import FilmList from "../components/FilmList";
import FilmInfo from "../components/FilmInfo";
import FilmSelector from "../components/FilmSelect";
import ListItem from "../components/ListItem";
// css import

//const could be
const FilmContainer= () => {
    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);

    useEffect(() => {
        getFilms();
    }, [])

    const getFilms = function(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => setFilms(films))
    }
    
    const onFilmSelected = function(film){
        setSelectedFilm(film);
    }

    return (
        <div className="main-container">
            <FilmSelector films={films} onFilmSelected={onFilmSelected} />
            {selectedFilm ? <FilmInfo selectedFilm={selectedFilm} /> : null}
        </div>
    )
}

export default FilmContainer;

