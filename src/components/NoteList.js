import React from 'react';
import NoteItem from './NoteItem';
import { groupNotes } from '../selectors/filters';
import uuid from 'uuid';

const NoteList = (props) => {
    return(
        <div>
            <div  className = "noteList">
            {
                !props.group &&

                props.notes.map((note) => {
                    return(
                        <div key = {note.id}>
                            <NoteItem note = {note}/>
                        </div>
                    )
                })
            }
            </div>
            <div className = "group">
            {
                props.group &&
                (
                    groupNotes(props.notes).map((grou) => {
                        return(
                            <div key = {grou.bucket} className = "group__text">
                                <p className = "group__title">{grou.bucket ? grou.bucket : "Not specified"}</p>
                                <span className = "group__body">
                                {grou.notes.map((note) => {
                                    return(
                                        <div key = {note.id}>
                                            <NoteItem note = {note} />
                                        </div>
                                    )
                                })}
                                </span>
                            </div>
                        )
                    })

                )
            }
            </div>
        </div>
    );
};

export default NoteList;
