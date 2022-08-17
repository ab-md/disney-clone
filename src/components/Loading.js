import React from 'react';

import loader from "../assets/images/loader.svg"

const Loading = () => {
    return (
        <div className='loading'>
            <img src={loader} alt="loading ..." />
        </div>
    );
};

export default Loading;