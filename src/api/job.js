import axios from "axios";
import { config } from "../config";

export async function getJobLandingPage() {
    
    return await axios.get(`${config.api_host}/api/jobs?limit=4&skip=0`)

}

export async function getAllJob() {
    
    return await axios.get(`${config.api_host}/api/jobs`)

}

export async function getJobById(job_id) {

    return await axios.get(`${config.api_host}/api/jobs/${job_id}`);

}