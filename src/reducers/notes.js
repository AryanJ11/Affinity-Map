const defNotes = []

const notesReducer = (state = defNotes, action) => {
    switch(action.type)
    {
        case "ADD_NOTE":
            return [...state, action.note];
        case "EDIT_NOTE":
            console.log(action);
            const id = action.id
            return state.map((note) => {
                if (note.id === id){
                    return ({
                        ...note,
                        ...action.updates
                    });
                }
                else{
                    return note;
                }
            })

        case "REMOVE_NOTE":

            return state.filter((note) => {
                return note.id !== action.id;
            });

        default:
            return state
    }
};

export default notesReducer;