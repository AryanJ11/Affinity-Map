import React from 'react';
import { connect } from 'react-redux';
import { setFilterBucket, sortByBucket, unsortNotes } from '../actions/filters';

const FilterNote = (props) => {
    return(
        <span>

            <input 
            type = "text" 
            placeholder = "Add bucket name"
            value = {props.group ? "No Filter" : props.filters.bucket}
            onChange = {props.group ? (e) => {} : (e) => {
                return(
                    props.dispatch(setFilterBucket(e.target.value))
                );
            }}
            disabled = {props.group}
            className = "navBar-input"
            />

            <button 
            onClick = {(e) => {
                    return(
                        props.dispatch(sortByBucket())
                    );
            }}
            disabled = {props.group}
            className = "navBar-button"
            >
            Sort
            </button>

            <button onClick = {(e) => {
                return(
                    props.dispatch(unsortNotes())
                );
            }}
            disabled = {props.group}
            className = "navBar-button"
            >
            UnSort
            </button>

        </span>
    )
};


const mapStateToProps = (state, props) => {
    return({
        filters: state.filters
    });
}

export default connect(mapStateToProps)(FilterNote);