import React from 'react';
import { Switch, Route } from 'react-router-dom'

// components
import SongsList from './SongsList'
import ArtistsList from './ArtistsList'
import AlbumsList from './AlbumsList'
import GenreList from './GenreList'
import RadioList from './RadioList'
import ArtistDetail from './ArtistDetail'
import AlbumDetail from './AlbumDetail'
import GenreDetail from './GenreDetail'

const MainContainer = () => {
    return (
        <div>
            <Switch >
                <Route exact path='/' component={ SongsList }/>
                <Route exact path='/artists' component={ ArtistsList }/>
                <Route path='/artists/:id' component={ ArtistDetail }/>

                <Route exact path='/albums' component={ AlbumsList }/>
                <Route path='/albums/:id' component={ AlbumDetail }/>

                <Route exact path='/genres' component={ GenreList } />
                <Route path='/genres/:id' component={ GenreDetail } />

                <Route path='/radio' component={ RadioList } />
            </Switch>
        </div>
    );
};

export default MainContainer;