export const UPDATE_SEARCH_TERM = (payload) => {
    return {
        type: 'UPDATE_SEARCH_TERM',
        payload: payload
    }
}

export const MAKE_SEARCH_ASYNC = (payload) => {
    return {
        type: 'MAKE_SEARCH_ASYNC',
        payload: payload 
    }
}

export const MAKE_SEARCH = (payload) => {
    return {
        type: 'MAKE_SEARCH',
        payload: payload 
    }
}
