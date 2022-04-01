import {app} from "../src/app";

const request = require('supertest');

describe('Testing endpoints', function () {
    describe('GET /v1/endpoint', function () {
        it('should return the first fetched item', async function () {
            const response = await request(app)
                .get('/v1/endpoint')
                .set('Accept', 'application/json');
            expect(response.headers["content-type"]).toMatch(/json/);
            expect(response.status).toEqual(200);
            expect(response.body.userId).toEqual(1);
            expect(response.body.id).toEqual(1);
        });
    });
    describe('GET /v1/endpointWithQueryParams', function () {
        it('should successfully parse the query params', async function () {
            const response = await request(app)
                .get('/v1/endpointWithQueryParams?page=1&limit=10')
                .set('Accept', 'application/json');
            expect(response.headers["content-type"]).toMatch(/json/);
            expect(response.status).toEqual(200);
            expect(response.body).toEqual({page: 1, limit: 10});
        });

        it('should be OK with missing query params', async function () {
            const response = await request(app)
                .get('/v1/endpointWithQueryParams?page=3')
                .set('Accept', 'application/json');
            expect(response.status).toEqual(200);
            expect(response.body).toEqual({page: "3"});
        });
    });
    describe('GET /v1/endpoint/:urlParam', function () {
        it('should parse the URL param', async function () {
            const response = await request(app)
                .get('/v1/endpoint/banana')
                .set('Accept', 'application/json');
            expect(response.headers["content-type"]).toMatch(/application\/json/);
            expect(response.status).toEqual(200);
            expect(response.body).toEqual({urlParam: "banana"});
        });
    });
});