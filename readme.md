# Project Name: URL Shortener

## Description

This project is a URL shortener that takes long URLs and generates shorter, more manageable links. It helps in sharing links easily and efficiently.

## Features

- Shorten long URLs to a compact format
- Customizable short link aliases
- Track click statistics for each shortened link
- Easy-to-use API for integration with other applications

## API Endpoints

- `POST /url`: Generates a new short URL for a given long URL.
- `GET /url`: Retrieves all the shortened URLs and their corresponding long URLs.
- `GET /url/:shortId`: Redirects to the original long URL associated with the given short ID.
- `GET /url/analytics/:shortId`: Retrieves the total number of clicks on a specific short URL.

## Installation

1. Clone the repository: `git clone https://github.com/Shikha115/URL_Shortner.git`
2. Navigate to the project directory: `cd url-shortener`
3. Install dependencies: `npm install`
4. Start the server: `npm start`

## Usage

1. Open your web browser and navigate to `http://localhost:8000`
2. Enter a long URL in the input field and click the "Submit" button
3. Copy the generated short link and share it with others

## Contributing

Contributions are welcome! If you have any ideas or improvements, please submit a pull request.
