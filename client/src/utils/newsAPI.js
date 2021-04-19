import axios from "axios";

const BASEURL = "https://newsapi.org/v2/everything?q="
const searchParam = "golfing"
const dateRange = "&from=2021-04-15&sortBy=popularity&apiKey="
// const API_KEY = process.env.REACT_APP_NEWS_API_KEY;


export default {
    search: function (query) {
        return axios.get(
            BASEURL + query + dateRange + API_KEY
        );
    }
};