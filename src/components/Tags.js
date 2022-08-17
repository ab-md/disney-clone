import React from 'react';
import { useQuery } from '@apollo/client';

import Videos from './Videos';
import { GET_VIDEOS } from '../graphql/queries';

// images
import disneyLogo from "../assets/images/disney+.png";
import marvelLogo from "../assets/images/marvel_studios.png";
import pixarLogo from "../assets/images/pixarr.png";
import starwarsLogo from "../assets/images/star-wars.png";
import natgeoLogo from "../assets/images/national-geographic.png";
import Loading from './Loading';

const Tags = () => {

    const { loading, error, data } = useQuery(GET_VIDEOS);

    const tags = [
        { id: 2, name: "Disney", image: disneyLogo },
        { id: 3, name: "Pixar", image: pixarLogo },
        { id: 5, name: "Star Wars", image: starwarsLogo },
        { id: 6, name: "National Geographic", image: natgeoLogo },
        { id: 1, name: "Marvel", image: marvelLogo },
        { id: 4, name: "Family", image: "" },
        { id: 7, name: "Classic", image: "" },
        { id: 8, name: "Thriller", image: "" },
    ]

    const sortVideos = (videos, tag) => {
        return videos.filter(video => video.tags.includes(tag));
    }

    const unWatched = videos => {
        const unseen = videos.filter(video => !video.whatched);
        // unseen.length = 4;
        return unseen;
    }

    return (
        <section>
            <div className='franchise-container'>
                {
                    tags.slice(0, 5).map(tag => (
                        <a className='franchise' href={`#${tag.name.toLowerCase()}`} key={tag.id}>
                            <img src={tag.image} alt={tag.name} />
                        </a>
                    ))
                }
            </div>
            {
                loading ? <Loading /> :
                    error && alert("Some error happened!<br />Please try again later.")
            }

            {
                data &&
                <Videos videos={unWatched(data.videos)} tag={"Recomended for you"} />
            }
            {
                data &&
                tags.map(tag => (<Videos
                    key={tag.id}
                    tag={tag.name}
                    videos={sortVideos(data?.videos, tag.name.toLowerCase())}
                />
                ))
            }
        </section>
    );
};

export default Tags;