import debounce from "debounce-promise";


import { START_FETCHING_ANNOUNCEMENT, SUCCESS_FETCHING_ANNOUNCEMENT, ERROR_FETCHING_ANNOUNCEMENT } from "./constants"

import { getAllAnnouncement } from "../../api/announcement"

let debounceFetchAnnouncement = debounce(getAllAnnouncement, 2000)


export const fetchAnnouncements = () => {
    return async (dispatch) => {
        dispatch(startFetchingAnnouncement())
        try {
            let { data: { data } } = await debounceFetchAnnouncement();

            dispatch(successFetchingAnnouncement({ data }))
        } catch (err) {
            dispatch(errorFetchingAnnouncement())
        }
    }
}
export const startFetchingAnnouncement = () => {
    return {
        type: START_FETCHING_ANNOUNCEMENT
    }
}

export const successFetchingAnnouncement = ({ data }) => {
    return {
        type: SUCCESS_FETCHING_ANNOUNCEMENT,
        data
    }
}

export const errorFetchingAnnouncement = () => {
    return {
        type: ERROR_FETCHING_ANNOUNCEMENT
    }
}