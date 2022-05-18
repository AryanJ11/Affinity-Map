import React from 'react';
import uuid from 'uuid';

export const addNote = ({desc = "", bucket = ""} = {}) => {
    return({
        type: "ADD_NOTE",
        note: {
            desc: desc,
            bucket: bucket,
            id: uuid()
        }
    })
}

export const editNote = (id, updates) => {
    return({
        type: "EDIT_NOTE",
        id: id,
        updates: updates
    })
}

export const removeNote = (id) => {
    return({
        type: "REMOVE_NOTE",
        id: id
    })
}