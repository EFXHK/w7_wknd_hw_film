import React from 'react';
import FilmContainer from '../containers/FilmContainer.js';


const FilmInfo = ({selectedFilm}) => {
    return (

        // <div>
        //     <h3>{selectedFilm.title}</h3>
        //     <p>{selectedFilm.original_title}</p>
        //     <p>{selectedFilm.original_title_romanised}</p>
        //     <p>{selectedFilm.movie_banner}</p>
        //     <p>{selectedFilm.description}</p>
        //     <p>{selectedFilm.release_date}</p>
        // </div>

        <selection>
            <h1>{selectedFilm.title} - {selectedFilm.original_title}</h1>
            <ul>
                <p><li><strong>ROMANJI:</strong> {selectedFilm.original_title_romanised}</li></p>
                <p><li> <img style={{ height: 275 }} src={selectedFilm.movie_banner}/></li></p>
                <p><li><strong>ABOUT:</strong> {selectedFilm.description}</li></p>
                <p><li><strong>{selectedFilm.release_date} / {selectedFilm.running_time} Min</strong></li></p>
            </ul>
        </selection>
    )
}

export default FilmInfo;