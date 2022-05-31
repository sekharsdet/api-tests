const data = require("../testData")
const Api = require("../wrappers/Api")
const report = require('../wrappers/allure-reporter')
const Logger = require('../wrappers/logger')


const url = data.testData.url;

let getResponse
let postResponse

describe('Get request tests', () => {
    it(`Send http GET request to ${url} and should return 200  status code `, async () => {
        getResponse = await Api.getData(url)
        Logger.logResponse(getResponse)
        expect(getResponse.status).toBe(200)
        Logger.logAssertions(getResponse.status, 200)
    })

    it(`Send http GET request to ${url} and should return correct username,password`, async () => {
        getResponse = await Api.getData(url)
        Logger.logResponse(getResponse)
        expect(getResponse.data.username).toBe(data.testData.username)
        Logger.logAssertions(getResponse.data.username, data.testData.username)
        expect(getResponse.data.password).toBe(data.testData.password)
        Logger.logAssertions(getResponse.data.password, data.testData.password)
    })


    it(`Send http GET request to ${url} should  correct target url`, async () => {
        getResponse = await Api.getData(url)
        Logger.logResponse(getResponse)
        expect(getResponse.data.targetUrl).toBe(data.testData.targetUrl)
        Logger.logAssertions(getResponse.data.targetUrl, data.testData.targetUrl)
    })
})

describe('Post request tests for target url', () => {
    it('POST request: Target URL should return 401 unautherized', async () => {
        getResponse = await Api.getData(url)
        postResponse = await Api.postData(getResponse.data.targetUrl)
        Logger.logResponse(postResponse)
        expect(postResponse.status).toBe(401)
        Logger.logAssertions(postResponse.status, 401)
    })

    it('POST request: Target URL should return IP adress', async () => {
        postResponse = await Api.postData(getResponse.data.targetUrl, getResponse.data)
        Logger.logResponse(postResponse)
        expect(postResponse.status).toBe(200)
        Logger.logAssertions(postResponse.status, 200)

        expect(postResponse.data.ip, data.testData.ip)
        Logger.logAssertions(postResponse.data.ip, data.testData.ip)
        expect(postResponse.data, jasmine.any(Object))
        expect(postResponse.data.ip, jasmine.any(String))
    })

    it('POST request: Target URL should return a Token', async () => {
        postResponse = await Api.postData(getResponse.data.targetUrl, getResponse.data)
        Logger.logResponse(postResponse)
        expect(postResponse.status).toBe(200)
        Logger.logAssertions(postResponse.status, 200)
        expect(postResponse.data.token, data.testData.token)
        Logger.logAssertions(postResponse.data.token, data.testData.token)
        expect(postResponse.data, jasmine.any(Object))
        expect(postResponse.data.token, jasmine.any(String))
    })
})