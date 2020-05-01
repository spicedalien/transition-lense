import React from 'react'

const Audio = ({ file }) => {
    if(!file) return <p>Loading Audio File..</p>
    return (
        <div className="audio">
            <audio controls>
            <source src={`/${file}/${file}.mp3`} type="audio/mpeg"/>
            Your browser does not support the audio tag.
            </audio>
        </div>
    )
}

export default Audio
