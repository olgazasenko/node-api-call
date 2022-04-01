import {controllerEndpoint, controllerEndpointWithQueryParams, controllerEndpointWithURLParam} from "./controller";

/**
 * Configure the application routes.
 * @param app the application instance
 */
export function configureRoutes(app): void {
    app.get('/v1/endpoint', controllerEndpoint);
    app.get('/v1/endpointWithQueryParams', controllerEndpointWithQueryParams);
    app.get('/v1/endpoint/:urlParam', controllerEndpointWithURLParam);
}