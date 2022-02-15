import {
    START_FETCHING_COMPANY,
    ERROR_FETCHING_COMPANY,
    SUCCESS_FETCHING_COMPANY,
} from './constants';


const statusList = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error',
}

const initialState = {
    data: [],
    status: statusList.idle
};


export default function reducer(state = initialState, action) {

    switch (action.type) {

        // TODO FETCH JOB DATA
        case START_FETCHING_COMPANY:
            return { ...state, status: statusList.process, data: [] }
        case SUCCESS_FETCHING_COMPANY:
            return { ...state, status: statusList.success, data: action.data }
        case ERROR_FETCHING_COMPANY:
            return { ...state, status: statusList.error }

        default:
            return state;
    }

}
