import React from 'react';


export const Loading = (name) => {
    // console.log("loading...");
    return (
        <div className='col-12'>
            <span className='fa fa-spinner fa-pulse fa-3 fa-fw text-primary'>

            </span>
            <p>Loading . . .</p>
        </div>
    );
};