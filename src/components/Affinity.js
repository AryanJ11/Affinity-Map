import React from 'react';
import AddNote from './AddNote';
import NoteList from './NoteList';
import FilterNote from './FilterNote';
import { connect } from 'react-redux';
import visibleNotes from '../selectors/visibleNotes';

class Affinity extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            add: false,
            group: false
        }
    };

    handleAdd = () =>{
        this.setState(() => {
            return({
                add: true
            });
        });
    }

    changeAdd = () =>{
        this.setState(() => {
            return({
                add: false
            })
        })
    }

    handleGroup = () =>{
        this.setState(() => {
            return({
                group: true
            });
        });
    };

    handleUngroup = () =>{
        this.setState(() => {
            return({
                group: false
            });
        });
    };

    render(){
        return(
            <div>
                <h1 className = "header" >AFFINITY MAP</h1>
                <div className = "navBar">
                    <button onClick = {this.handleAdd} className = "navBar-button__add">Add Note</button>
                    <p className = "group-button">
                    <button onClick = {this.handleGroup} className = "navBar-button">Group Notes</button>
                    <button onClick = {this.handleUngroup} className = "navBar-button" disabled = {!this.state.group}>UnGroup Notes</button>
                    <FilterNote group = {this.state.group}/>
                    </p>
                </div>
                <div>
                    <AddNote add = {this.state.add} onSubmit = {(ad) => {
                        this.setState(() => {
                            return({
                                add: ad
                            });
                        })
                    }} />
                </div>
                <div>
                    {this.props.notes.length === 0 && <p className = "empty">Add notes to build your affinity map</p>}
                    <NoteList group = {this.state.group} notes = {visibleNotes({notes: this.props.notes, filters: this.props.filters})}/>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return({
        notes: state.notes,
        filters: state.filters
    });
};

export default connect(mapStateToProps)(Affinity);