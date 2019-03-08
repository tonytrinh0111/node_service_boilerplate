# Microservices Template

A boilerplate to help start microservices projects in Node.js quickly. Packaged with Docker, Swagger (edit API spec, execute test, mocking, Nodemon etc.), Swagger UI (API documentation), Winston (logging), Dotenv (.env config)

## Code Structure

1. All logic is written in controllers to be placed within `api/controllers` folder.
2. All helpers / utility functions to be placed in `api/helpers` folder.
3. All test cases to be placed in `test` folder.
4. All configuration is stored against the `.env` file in the root folder.
5. (Work in Progress) Environment-specific config to be placed in respective `config/env` environment folder.


## Getting started

### Normal Installation

1. Install node.js and git
2. Add them to path if not already in path.
4. Clone the repo and cd to it
6. Run `npm install` to get all the dependencies
7. Run `npm start` to start as usual. Note that `lastcommitsha` is only available when running Docker image from DockerHub
8. Run `swagger project start -m` to start in mock mode


### Pulling & Running from Docker Hub

1. Pull from DockerHub `docker pull tonytrinh0111/node_service_boilerplate`
2. Then, start `docker run -d -p 3000:3000 tonytrinh0111/node_service_boilerplate`


## API Spec (OpenAPI/Swagger)

Service / API documentation is epxosed as `/api-docs`. This is a reflect of `api/swagger/swagger.yaml` content

Run swagger editor by `swagger project edit` at root

## Logging

An example in `app.js`
`logger.log('info','try: \n curl http://127.0.0.1:' + port...);`

More info at [Winston](https://github.com/winstonjs/winston)

## Running Tests

Run `npm test` or `swagger project test` at root to execute the written test case


## Limitation, Risk & To-Do
1. This boilerplat is mainly for RESTful API and will not work for other pattern (e.g. batch service, cron-tainer).
2. Security is a big issue with the current state. There need to be some mechanism for Authentication & Authorization for every invocation to the service.
3. The API spec should include standard traits for error handling (HTTP response), pagination, tracibility (transactionId, source, timestamp etc.)
4. Service management (e.g. rate limiting, analytics ) is also missing. Probably an API / service gateway is needed.
5. Add `PromClient` and a new controller to epxose metrics
6. Add `Eslint` for, well, linting
7. Probably need to re-structure a bit (i.e. `/src/` for all source code, a dedicated folder for static content?)
8. If the situation allows, perhaps consider using Loopback or another framework with all these boilerplates



