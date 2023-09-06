## Installation

To install the required node_modules, run:

```bash
npm install
```

## Challenge Execution

To execute Challenge 1, use the following command:

Linux & Mac:

```bash
node challenges/challenge1ex.js
```

Windows:

```bash
node challenges\challenge1ex.js
```

To execute Challenge 2, use the following command:

Linux & Mac:

```bash
node challenges/challenge2ex.js
```

Windows:

```bash
node challenges\challenge2ex.js
```

## Testing

To run tests on Linux and Mac, use:

```bash
npm test
```

To run tests on Windows, use:

```bash
npm run test-window
```

## Docker

To build a Docker image, execute the following command at the root of the project:

```bash
docker build . -t <your-username>/node-web-app
```

To run the Docker container, use:

```bash
docker run -p 49160:3000 -d <your-username>/node-web-app
```

The Docker container will be running on port 49160, and you can access the webpage at:

[http://localhost:49160/](http://localhost:49160/)



**Please replace `<your-username>` with your Docker username when building the image.**

