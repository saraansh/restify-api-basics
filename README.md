# RESTify Basics

A simple API developed using the *restify* package to gain a basic insight of the restify package.

## Prerequisites

To run the API, install the following:

- node.js v10.x or above
- npm v6.x or above
- curl v7.x or above

To manage multiple NodeJs versions, its recommended to use Node Version Manager

## Try It Out

#### To run the server:

- Install required packages

    ```bash
    npm install
    ```

- Initiate the server

    ```bash
    npm start
    ```

#### To test the various routes:

- Add products to the store
    
    ```bash
    curl -H "Content-Type: application/json" -X POST -d '{"id":101,"name":"Pizza"}' http://127.0.0.1:3000/api/products
    ```

- Fetch details for all products
    
    ```bash
    curl --request GET http://127.0.0.1:3000/api/products/
    ```

- Update a product in the store
    
    ```bash
    curl -H "Content-Type: application/json" -X PUT -d '{"name":"Sandwich"}' http://127.0.0.1:3000/api/products/101
    ```

- Fetch details for a product
    
    ```bash
    curl --request GET http://127.0.0.1:3000/api/products/101
    ```

- Delete a product
    
    ```bash
    curl --request DELETE http://127.0.0.1:3000/api/products/101
    ```

To use Postman, remember to set the *Content-Type* header to *application/json* and pass the data as *RAW* under the *Body* tab.