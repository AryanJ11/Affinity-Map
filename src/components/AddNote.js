import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { addNote } from '../actions/notes';

class AddNote extends React.Component{

    constructor(props){
        super(props);
    }

    handleOnSubmit = (note) => {
        this.props.onSubmit(false);
        return(
        this.props.dispatch(addNote(note))
        );
    }

    render(){
        return(
            <div>
                {this.props.add && <NoteForm
                    onSubmit = {this.handleOnSubmit}
                    />}
            </div>
        )
    }
};

const mapStateToProps = (state, props) => {
    return({
        notes: state.notes
    })
};

export default connect(mapStateToProps)(AddNote);