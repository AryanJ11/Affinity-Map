const visibleNotes = ({notes, filters} = {}) => {
    
    let notesMod = notes.filter((note) => {
        return filters.bucket ? note.bucket.toLowerCase().includes(filters.bucket.toLowerCase()) : true;
    })

    if(filters.sortBy){
        return notesMod.sort((a, b) => {
            return a.bucket <= b.bucket ? -1 : 1
        });
    }
    else
        return notesMod;
};

export default visibleNotes;