import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { GET_VIDEO } from "../graphql/queries";
import { PUBLISH_WATCHING, WATCH_VIDEO } from '../graphql/mutation';

const Video = () => {

    const { slug } = useParams();

    const { loading, error, data } = useQuery(GET_VIDEO, {
        variables: { slug: slug }
    })
    // console.log({ loading, error, data });

    const [whatch, { data: updatedData, error: updateError, loading: updating }] = useMutation(WATCH_VIDEO, {
        variables: { slug }
    })
    const [publishWatching, result] = useMutation(PUBLISH_WATCHING, {
        variables: { slug }
    })
    console.log([publishWatching, result]);

    const [watching, setWatching] = useState(false);

    // const watchingToggle = () => watching ? setWatching(false) : setWatching(true);

    return (
        <div>
            {
                loading ? <p>Loading ...</p> :
                    error ? <p>Error ...</p> :
                        data && !watching &&
                        <>
                            <div className='banner-container single-banner'>
                                <img
                                    className='banner-image'
                                    style={{ height: "100vh" }}
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
        </div>
    );
};

export default Video;