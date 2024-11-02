##Linklyte: URL Shortener Service

### Introduction

This URL shortener service is designed to shorten long URLs and provide analytics for shortened URLs. It is built using Node.js with Express.js framework and MongoDB for database storage.

### Functionalities

#### 1. Shorten URL

- **Route**: `/api/v1/geturl/url` (POST)
- **Controller**: `url.controller.js`
- **Description**: Allows users to shorten long URLs by submitting a POST request with the long URL in the request body.

#### 2. Redirect Shortened URL

- **Route**: `/:shortid` (GET)
- **Controller**: `redirecturl.controller.js`
- **Description**: Redirects users to the original long URL associated with the provided short ID.

#### 3. URL Analytics

- **Route**: `/analytics/:shortid` (GET)
- **Controller**: `analytics.controller.js`
- **Description**: Provides analytics for a shortened URL, including the number of visitors who accessed the URL.

### Setting Up and Running the Service

1. Clone the repository from [GitHub Repo](https://github.com/example/url-shortener).
2. Install dependencies using `npm install`.
3. Set up a MongoDB database and configure the connection URI in the `.env` file.
4. Run the service using `npm start`.

### Dependencies

- **Express.js**: Web application framework for Node.js used to build the API endpoints.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **dotenv**: Module to load environment variables from a `.env` file into `process.env`.
- **body-parser**: Middleware to parse incoming request bodies in a middleware before handlers, available under the `req.body` property.
- **shortid**: Library to generate unique and short IDs for shortened URLs.

### Folder Structure

```
- controllers/
  - url.controller.js
  - redirecturl.controller.js
  - analytics.controller.js
- models/
  - url.model.js
- routes/
  - url.route.js
  - analytic.route.js
- .env
- index.js
- README.md
- package.json
```

### Environment Variables

- **MONGODB_URI**: MongoDB connection URI.
- **PORT**: Port on which the server will run (default: 3000).

### Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
