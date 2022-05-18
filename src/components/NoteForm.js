import React from 'react';
import { connect } from 'react-redux';

class NoteForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            bucket: '',
            desc: '',
            error: ''
        }
    }

    handleBucketChange = (e) => {
        const buck = e.target.value;
        this.setState(() => {
            return({
                bucket: buck
            })
        })
    }

    handleDescChange = (e) => {

        const desc = e.target.value;

        this.setState(() => {
            return({
                desc: desc
            });
        });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();

        if(!this.state.desc)
        {
            this.setState(() => {
                return({
                error: 'Cannot add note without description'
                });
            })
        }
        else
        {
            this.props.onSubmit({
                desc: this.state.desc,
                bucket: this.state.bucket
            })

            this.setState(() => {
                return({
                error: '',
                desc: '',
                bucket: ''
                });
            })


            e.target.elements.Bucket.value = '';
            e.target.elements.Desc.value = '';
        }

    }

    render(){
        return(
        <div className = "noteForm" >
        <p className = "noteForm__title">Add New Note</p>

            {this.state.error && <p className = "noteForm__error">{this.state.error} </p>}

            <form onSubmit = {this.handleFormSubmit} className = "noteForm__body">
            
            
            <input 
            type="text"
            placeholder = "Bucket Name"
            value = {this.state.bucket}
            onChange = {this.handleBucketChange}
            name = "Bucket"
            className = "noteForm__input"
            /><br />
            
            <textarea
            placeholder = "Add a description"
            value = {this.state.desc}
            onChange = {this.handleDescChange}
            name = "Desc"
            className = "noteForm__text"
            >
            </textarea><br />

            <button type="submit" className = "noteForm__button">Submit</button>
            
            </form>
        </div>
        )
    };
};

const mapStateToProps = (state, props) => {
    return({
        notes: state.notes
    })
};

export default connect(mapStateToProps)(NoteForm);