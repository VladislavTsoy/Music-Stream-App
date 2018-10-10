import React, { Component } from 'react';

// components
import MusicControls from './MusicControls'

class ControllerContainer extends Component {
    render() {
        return (
            <div id="music-controls">
                <MusicControls />
            </div>
        );
    }
}

export default ControllerContainer;