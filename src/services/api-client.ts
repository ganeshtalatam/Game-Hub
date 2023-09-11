import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key : "2cb3eb7886d34bcd857653091136aadb"
    }
})