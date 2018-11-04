// Required Modules
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Required Components
import GenreItem from './GenreItem';

const genreArr = [
    {
        genre: "Rock",
        imgUrl: "https://images.unsplash.com/photo-1511220043390-e929fe0edf55?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=19b37d4062df54a5f9b14b675b610c5f&auto=format&fit=crop&w=1950&q=80"
    },
    {
        genre: "Hip-Hop",
        imgUrl: "https://images.unsplash.com/photo-1444824775686-4185f172c44b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c3dcf58bb589856e8a3b0e21412fbeb&auto=format&fit=crop&w=1950&q=80"
    },
];

const GenreList = () => {
    const displayGenres = genreArr.map(genre => {
        return <Link key={genre.genre} to={`/genres/${genre.genre}`}><div id="song-item"><GenreItem genreObj={genre}/></div></Link>
    })
    return (
        <Fragment>
            <h2>Genre</h2>
            <div id="song-list-container">
                {displayGenres}
            </div>
        </Fragment>
    );
};

export default GenreList;