import React from 'react';

export const setFilterBucket = (bucket) => {
    return({
        type: "SET_FILTER_BUCKET",
        bucket: bucket
    });
};

export const sortByBucket = () => {
    return({
        type: "SORT_BY_BUCKET",
    });
};

export const unsortNotes = () =>{
    return({
        type: "UNSORT"
    });
};