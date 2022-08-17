import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';

import { GET_VIDEOS } from '../graphql/queries';

import "./banner.css";
import Loading from './Loading';

const Banner = () => {

    const { loading, error, data } = useQuery(GET_VIDEOS);
    const videos = data?.videos;

    const [random, setRandom] = useState({});

    const randomVideo = async (videos) => {
        const randomVid = await videos[Math.floor(Math.random() * videos.length)];
        const url = await randomVid.cover.url;
        const alt = await randomVid.cover.fileName.split(".")[0];
        const slug = await randomVid.slug;
        setRandom({
            ...random,
            url,
            alt,
            slug
        })
    }

    useEffect(() => {
        data && randomVideo(data?.videos);
    }, [data])

    return (
        <div>
            {
                loading ? <Loading /> :
                    error ? alert("Some error happened!<br />Please try again later.") :
                        data &&
                        // <div>
                        <Link to={`/videos/${random.slug}`} className='banner-container'>
                            <img
                                className='banner-image'
                                src={random.url}
                                alt={random.alt}
                            />
                        </Link>
                // </div>
            }
        </div>
    );
};

export default Banner;