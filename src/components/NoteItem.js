import React from 'react';
import { connect } from 'react-redux';
import { editNote, removeNote } from '../actions/notes';

class NoteItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            bucket: this.props.note.bucket ? this.props.note.bucket : '',
            desc: this.props.note.desc
        }
    };

    handleBucketChange = (e) => {
        const buck = e.target.value;
        this.setState(() => {
            return({
                bucket: buck 
            });
        });

        this.props.dispatch(editNote(this.props.note.id, {bucket: e.target.value}));
    };
    
    handleDescChange = (e) => {

        const desc = e.target.value;

        this.setState(() => {
            return({
                desc: desc
            });
        });
        this.props.dispatch(editNote(this.props.note.id, {desc: e.target.value}));
    };

    render(){
        return(
            
            <div className = "noteList__item noteList__item-body">
                <form>
                
                    <input
                    type = "text"
                    value = {this.state.bucket}
                    onChange = {this.handleBucketChange}
                    className = "noteForm__input"
                    /><br></br>

                    <textarea
                    placeholder = "Add a description"
                    value = {this.state.desc}
                    onChange = {this.handleDescChange}
                    name = "Desc"
                    className = "noteForm__text"
                    >
                    </textarea>
                
                </form>

            <button className = "noteForm__button" onClick = {(e) => {this.props.dispatch(removeNote(this.props.note.id))}}>Remove</button>

            </div>
    )};
};

const mapStateToProps = (state, action) => {
    return({
        notes: state.notes  
    });
}

export default connect(mapStateToProps)(NoteItem);