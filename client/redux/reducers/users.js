const GET_DATA = 'skillcrucial/users/GET_DATA'
const REQEST_START = 'skillcrucial/users/REQEST_START'
const REQEST_DONE = 'skillcrucial/users/REQEST_DONE'
const ERROR_HAPPEND = 'skillcrucial/users/ERROR_HAPPEND'

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        list: action.list
      }
    default:
      return state
  }
}

export function getData(PageIndex = 0) {
  return (dispatch) => {
    dispatch({ type: REQEST_START })
    return fetch(`/api/users/${PageIndex}`)
      .then(res => res.json())
      .then((json) => {
        dispatch({
          type: GET_DATA,
          list: json
        })
        dispatch({ type: REQEST_DONE })
      })
      .catch((err) => {
        dispatch({
          type: ERROR_HAPPEND,
          err
        })
        dispatch({ type: REQEST_DONE })
      })
  }
}
