const axios = require('axios')

class Api {

    /**
     * invoking get method
     * @param {*} url 
     * @returns response
     */
    async getData(url) {
        try {
            const response = await axios.get(url)
            return await response
        } catch (error) {
            console.error(`Failed GET response from ${url}.\n Reason: ${error}`)
            return error
        }
    }

    /**
     * invoking post method
     * @param {*} url 
     * @param {*} auth 
     * @returns response
     */
    async postData(url, auth) {
        try {
            const response = await axios.post(
                url,
                {},
                {
                    auth: auth,
                }
            )
            const data = await response
            return data
        } catch (error) {
            console.error(`Failed post data to:${url}.\n Reason: ${error}`)
            return error.response
        }
    }
}

module.exports = new Api()