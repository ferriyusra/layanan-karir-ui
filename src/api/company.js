import axios from "axios";
import { config } from "../config";

export async function getAllCompany() {
    
    return await axios.get(`${config.api_host}/api/companies`)

}

export async function getCompanyById(company_id) {

    return await axios.get(`${config.api_host}/api/companies/${company_id}`);

}