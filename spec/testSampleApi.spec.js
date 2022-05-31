const data = require("../testData")
const Api = require("../wrappers/Api")
const report = require('../wrappers/allure-reporter')


const url = data.testData.url;

let getResponse
let postResponse

describe('Get request tests', () => {
    it(`Send http GET request to ${url} and should return 200  status code `, async () => {
        getResponse = await Api.getData(url)
        expect(getResponse.status).toBe(200)
    })

    it(`Send http GET request to ${url} and should return correct username,password`, async () => {
        getResponse = await Api.getData(url)
        expect(getResponse.data.username).toBe(data.testData.username)
        expect(getResponse.data.password).toBe(data.testData.password)
    })


    it(`Send http GET request to ${url} should  correct target url`, async () => {
        getResponse = await Api.getData(url)
        expect(getResponse.data.targetUrl).toBe(data.testData.targetUrl)
    })
})

describe('Post request tests for target url', () => {
    it('POST request: Target URL should return 401 unautherized', async () => {
        getResponse = await Api.getData(url)
        postResponse = await Api.postData(getResponse.data.targetUrl)
        expect(postResponse.status).toBe(401)
    })

    it('POST request: Target URL should return IP adress', async () => {
        postResponse = await Api.postData(getResponse.data.targetUrl, getResponse.data)
        expect(postResponse.status).toBe(200)
        expect(postResponse.data, jasmine.any(Object))
        expect(postResponse.data.ip, jasmine.any(String))
    })

    it('POST request: Target URL should return a Token', async () => {
        postResponse = await Api.postData(getResponse.data.targetUrl, getResponse.data)
        expect(postResponse.status).toBe(200)
        expect(postResponse.data, jasmine.any(Object))
        expect(postResponse.data.token, jasmine.any(String))
    })
})