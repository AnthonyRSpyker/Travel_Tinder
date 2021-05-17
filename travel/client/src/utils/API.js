import axios from "axios"

export default{
    getPerson: function () {
        return axios.get("./api/persons")
    }
}