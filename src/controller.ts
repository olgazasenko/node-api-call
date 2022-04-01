import {Request, Response} from "express";
import fetch from "node-fetch";

/**
 * A generic controller endpoint. Rename when implementing specific logic
 * @param req the request
 * @param res the response
 */
export async function controllerEndpoint(req: Request, res: Response): Promise<void> {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await data.json();
        res.status(200).send(jsonData[0]);
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Could not access the API');
    }
}

/**
 * An example endpoint with query parameters.
 * Test it like so: curl http://localhost:3000/v1/endpointWithQueryParams\?page=3\&limit=5 or in the browser
 * @param req
 * @param res
 */
export function controllerEndpointWithQueryParams(req: Request, res: Response): void {
    const page = req.query.page;
    const limit = req.query.limit;
    res.status(200).send({ page, limit });
}

/**
 * An example endpoint with URL parameters.
 * Test it like so: curl http://localhost:3000/v1/endpoint/banana or in the browser
 * @param req
 * @param res
 */
export function controllerEndpointWithURLParam(req: Request, res: Response): void {
    res.status(200).send(req.params);
}