import debounce from "debounce-promise";


import { START_FETCHING_COMPANY, SUCCESS_FETCHING_COMPANY, ERROR_FETCHING_COMPANY } from "./constants"

import { getAllCompany } from "../../api/company"

let debounceFetchCompany= debounce(getAllCompany, 2000)


export const fetchCompanies = () => {
    return async (dispatch) => {
        dispatch(startFetchingCompany())
        try {
            let { data: { data } } = await debounceFetchCompany();

            dispatch(successFetchingCompany({ data }))
        } catch (err) {
            dispatch(errorFetchingCompany())
        }
    }
}
export const startFetchingCompany= () => {
    return {
        type: START_FETCHING_COMPANY
    }
}

export const successFetchingCompany= ({ data }) => {
    return {
        type: SUCCESS_FETCHING_COMPANY,
        data
    }
}

export const errorFetchingCompany= () => {
    return {
        type: ERROR_FETCHING_COMPANY
    }
}