### Linklyte: URL Shortener Service

### Introduction

This URL shortener service is designed to shorten long URLs and provide analytics for shortened URLs. It is built using Node.js with Express.js framework and MongoDB for database storage.

### Functionalities

#### 1. Shorten URL

- **Route**: `/url` (POST)
- **Controller**: `url.controller.js`
- **Description**: Allows users to shorten long URLs by submitting a POST request with the long URL in the request body.

#### 2. Redirect Shortened URL

- **Route**: `/:shortid` (GET)
- **Controller**: `redirecturl.controller.js`
- **Description**: Redirects users to the original long URL associated with the provided short ID.

#### 3. URL Analytics

- **Route**: `/analytics?url=url` (GET)
- **Controller**: `analytics.controller.js`
- **Description**: Provides analytics for a shortened URL, including the number of visitors who accessed the URL.


### Folder Structure


└── 📁Linklyte
    └── 📁backend
        └── 📁controllers
            └── analytics.controller.js
            └── redirecturl.controller.js
            └── url.controller.js
        └── 📁databases
            └── db.js
        └── 📁models
            └── url.model.js
        └── 📁utils
            └── constant.js
        └── .env
        └── .gitignore
        └── app.js
        └── index.js
        └── package-lock.json
        └── package.json
        └── Readme.md
    └── 📁frontend-app
        └── 📁.expo
            └── devices.json
            └── README.md
        └── 📁app
            └── 📁(tabs)
                └── _layout.jsx
                └── analytics.jsx
                └── index.jsx
            └── _layout.jsx
        └── 📁assets
            └── adaptive-icon.png
            └── Cubes.png
            └── favicon.png
            └── icon.png
            └── splash.png
        └── 📁constants
            └── constant.js
        └── 📁hooks
            └── useGradientText.js
        └── .gitignore
        └── app.json
        └── babel.config.js
        └── eas.json
        └── package-lock.json
        └── package.json
```