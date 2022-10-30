import React from "react";
import FilmContainer from "../containers/FilmContainer";

const FilmSelector = ({films, onFilmSelected}) => {

    const handleChange = function(event) {
        const chosenFilm = films[event.target.value];
        onFilmSelected(chosenFilm);
    }

    const filmOptions = films.map((film, index) => {
        return <option value={index} key={index}>{film.title}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Filmography</option>
            {filmOptions}
        </select>
    )
}

export default FilmSelector;