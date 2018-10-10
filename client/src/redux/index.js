import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


const state = {
    currentSong: null,
    audioFile: null,
}

export const setCurrentSong = current => {
    let url = current.source
    let audio = new Audio(url)
    return function(dispatch){
        dispatch({
            type: "SET_SONG",
            data: current,
            audio
        })
    }
}

const reducer = (prevState = state, action) => {
    switch(action.type) {
        case "SET_SONG": 
            if(prevState.audioFile) prevState.audioFile.pause()
            action.audio.play()
            return {
                currentSong: action.data,
                audioFile: action.audio,
              
            }
        default:
            return prevState

    }
}

export default createStore(reducer, applyMiddleware(thunk))