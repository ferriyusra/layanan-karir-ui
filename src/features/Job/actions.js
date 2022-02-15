import debounce from "debounce-promise";


import { START_FETCHING_JOB, SUCCESS_FETCHING_JOB, ERROR_FETCHING_JOB } from "./constants"

import { getAllJob } from "../../api/job"

let debounceFetchJob = debounce(getAllJob, 2000)


export const fetchJobs = () => {
    return async (dispatch) => {
        dispatch(startFetchingJob())
        try {
            let { data: { data } } = await debounceFetchJob();

            dispatch(successFetchingJob({ data }))
        } catch (err) {
            dispatch(errorFetchingJob())
        }
    }
}
export const startFetchingJob = () => {
    return {
        type: START_FETCHING_JOB
    }
}

export const successFetchingJob = ({ data }) => {
    return {
        type: SUCCESS_FETCHING_JOB,
        data
    }
}

export const errorFetchingJob = () => {
    return {
        type: ERROR_FETCHING_JOB
    }
}