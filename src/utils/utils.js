const API_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "?api_key=52bd7e00-327e-4447-bd4d-a612ccd01143";
// const REACT_APP_APIKEY="52bd7e00-327e-4447-bd4d-a612ccd01143"

export const getVideosEndpoint = () => API_URL + "/videos" + API_KEY;
export const getVideoEndpoint = (id) => API_URL + "/videos/" + id + API_KEY;