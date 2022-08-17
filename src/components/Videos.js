import React from 'react';

import { Link } from "react-router-dom";

const Videos = ({tag, videos}) => {

    return (
        <div className='jenre-container' id={tag?.toLowerCase()}>
            <p className='jenre-name'>{tag}</p>
            {/* <div className='videos-container'> */}
            {
                videos.map(video => (
                    <Link className='tag-videos' key={video.id} to={`/videos/${video.slug}`}>
                        <img className='tag-image' src={video.cover.url} alt={video.cover.fileName.split(".")[0]} />
                    </Link>
                ))
            }
            {/* </div> */}
        </div>
    );
};

export default Videos;