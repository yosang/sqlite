# About
API supporting CRUD operations using SQLite with NodeJS and Express

# Installation

1. Clone the repo with
    ```sh
    git clone https://github.com/yosang/sqlite
    ```

2. Install dependencies with
    ```sh
    npm install
    ```

3. Add environment variables
    ```sh
    cp .env.example .env
    ```

4. Start the server with

    ```sh
    npm start
    ```

# Usage
Endpoints available are:

- GET `/` - Retrieve users.
- POST `/` - Create a new user.
<!-- - PUT `/:id` - Update a document by its id. -->
- DELETE `/:id` - Deletes a user

# License
[MIT](https://choosealicense.com/licenses/mit/)
