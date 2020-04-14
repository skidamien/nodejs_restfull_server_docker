# nodejs_restfull_server_docker
A simple NodeJS RESTful app and a Dockerfile

## Getting Started

### Installing locally

Build the docker image and store it locally:
```
$ docker build -t skidamien/restfull_server .
```

Run it locally:
```
$ docker run -p 8080:8080 -d skidamien/restfull_server
```

### Testing

Use curl to test the app from the cli
```
$ curl http://localhost:8080/hello
{"message":"hello world"}
```

