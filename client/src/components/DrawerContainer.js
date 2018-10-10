import React from 'react';
import SearchBar from './SearchBar'
import Navbar from './Navbar'
const DrawerContainer = () => {
    return (
        <div id="drawer" style={{width: '100%'}}>
            <SearchBar />
            <Navbar />
        </div>
    );
};

export default DrawerContainer;