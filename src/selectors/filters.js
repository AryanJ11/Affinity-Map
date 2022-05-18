import React from 'react';


export const groupNotes = (notes) => {
    let groups = [];

    notes.map((note) => {
        let flag = false;
        groups.map((group) => {
            if(group.bucket === note.bucket){
                flag = true;
                group.notes = group.notes.concat(note);
            }
        })
        if(!flag){
            console.log(note);
            groups = groups.concat({bucket: note.bucket, notes: [note]});
            // console.log(groups);
        }
    })
    return groups;
};