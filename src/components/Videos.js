import React from 'react';

import { Link } from "react-router-dom";

const Videos = ({tag, videos}) => {

    return (
        <div id={tag?.toLowerCase()}>
            <p>{tag}</p>
            {
                videos.map(video => (
                    <Link className='tag-videos' key={video.id} to={`/videos/${video.slug}`}>
                        <img className='tag-image' src={video.cover.url} alt={video.cover.fileName.split(".")[0]} />
                    </Link>
                ))
            }
        </div>
    );
};

export default Videos;