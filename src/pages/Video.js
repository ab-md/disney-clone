import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { GET_VIDEO } from "../graphql/queries";
import { PUBLISH_WATCHING, WATCH_VIDEO } from '../graphql/mutation';
import Loading from '../components/Loading';

const Video = () => {

    const { slug } = useParams();

    const { loading, error, data } = useQuery(GET_VIDEO, {
        variables: { slug: slug }
    })

    const [whatch, watchResult] = useMutation(WATCH_VIDEO, {
        variables: { slug }
    })
    const [publishWatching, result] = useMutation(PUBLISH_WATCHING, {
        variables: { slug }
    })

    const [watching, setWatching] = useState(false);

    // const watchingToggle = () => watching ? setWatching(false) : setWatching(true);

    return (
        <>
            {
                loading ? <Loading /> :
                    error ? alert("Some error happened!<br />Please try again later.") :
                        data && !watching &&
                        <>
                            <div className='banner-container single-banner'>
                                <img
                                    className='banner-image'
                                    style={{ height: "100%" }}
                                    src={data.video.cover.url}
                                    alt={data.video.cover.fileName.split(".")[0]}
                                />
                                <div className='watch'>
                                    <p>{data.video.description}</p>
                                    <button
                                        onClick={() => {
                                            watching ? setWatching(false) : setWatching(true);
                                            whatch();
                                            publishWatching()
                                        }}
                                    >Watch now!</button>
                                </div>
                            </div>
                        </>
            }
            {
                watching &&
                <>
                    <video style={{ height: "calc(100vh - 20px)", width: "100%" }} controls>
                        <source src={data.video.video.url} type="video/mp4" />
                    </video>
                    <div
                        style={{ height: "50px" }}
                        onClick={() => watching && setWatching(false)}
                    ></div>
                </>
            }
        </>
    );
};

export default Video;