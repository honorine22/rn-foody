import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.foursquare.com/v3/places",
    headers: {
        accept: "application/json",
        Authorization: "fsq36lt6awhywePjuvvw543l80NlkaAAHgwj6gd1bfo62B4=",
    },
});

export const searchPlaces = async (query) => {
    try {
        const response = await instance.get("/search", { params: { query, limit: 20 } });
        return response.data.results;
    } catch (error) {
        console.error(error);
        throw error;
    }
};