const defFilters = {
    bucket: "", 
    sortBy: false
};

const filtersReducer = (state = defFilters, action) => {
    switch(action.type)
    {
        case "SET_FILTER_BUCKET":
            return {...state, bucket: action.bucket};

        case "SORT_BY_BUCKET":
            return {...state, sortBy: true};

        case "UNSORT":
            return {...state, sortBy: false};

        default:
            return state
    }
};

export default filtersReducer;