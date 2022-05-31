class Logger {

    /**
     * logging api response as string 
     * @param {*} response 
     */
    logResponse(response) {
        console.log("the payload response is : " + JSON.stringify(response.data))
    }

    /**
     * logging actua and expected values
     * @param {*} actual 
     * @param {*} expected 
     */
    logAssertions(actual, expected) {
        console.log(`Actual value is : ${actual} and Expected value is: ${expected}`)
    }

}

module.exports = new Logger()