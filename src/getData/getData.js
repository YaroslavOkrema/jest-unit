const axios = require("axios");
const mapArrToStrings = require("src/mapArrToString/mapArrToString");

const getData = async () => {
    try {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/users');
        const usersId = responce.data.map(user => user.id);
        return mapArrToStrings(usersId);
    } catch (e) {

    }
}

module.exports = getData;