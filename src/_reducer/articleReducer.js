const initialState = {
    all : [],
    popular : []

};

const articleReducer  = (state = initialState, action) => {
    console.log();
    switch (action.type) {
        
        case 'SHOW_ARTICLE_FULFILLED' :
            return {
                ...state,
                all: action.payload.data
            }
        case 'SHOW_POPULAR_FULFILLED' :
            return {
                ...state,
                popular: action.payload.data
            }            
            default:
                return state
        }
}

export default articleReducer;