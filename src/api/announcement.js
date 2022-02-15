import axios from "axios";
import { config } from "../config";

export async function getAnnouncementLandingPage() {
    return await axios.get(`${config.api_host}/api/announcements?limit=3&skip=0`)
}

export async function getAllAnnouncement() {
    return await axios.get(`${config.api_host}/api/announcements`)
}

export async function getAnnouncementById(announcement_id) {

    return await axios.get(`${config.api_host}/api/announcements/${announcement_id}`);

}