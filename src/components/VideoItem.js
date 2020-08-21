import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <div className="content">
                <img
                    className="ui image"
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}></img>
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;