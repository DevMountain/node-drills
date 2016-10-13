# Node Drills
Each standalone app below builds on the previous app(s). The instructions given are only for the current app, with the assumption that you don't need repeat instructions for the previous steps.

### App 1 - Setup
Create a package.json file and install/save dependencies (like express, body-parser, etc).

### App 2 - Listen
Set up an express server that listens on port 3000.

### App 3 - Get and post
Create an array of items (movies, names, cars, etc) and create `GET` and `POST` endpoints for that array. Send the results with an `ok` status code.

### App 4 - JS files
Create an array of objects in the data.js file. Require this in your index.js file and create `GET` and `POST` endpoints. Send the results with an `ok` status code.

### App 5 - CRUD, Queries and params
Create CRUD endpoints on an array of objects. 
- `GET` all objects.
- `POST` a new object.
- Use `req.params` to `GET` one object.
- Use `req.query` to `GET` all objects matching the query parameter.
- Use `req.params` to `DELETE` one object.
- Use `req.query` to `DELETE` all objects matching the query parameter. 
- Use `req.params` to `PUT` (update) one object.
- Use `req.query` to `PUT` (update) all objects matching the query parameter. 

### App 6 - Serve Static Files
Use express to serve the static files in the public folder.

### App 7 - Sessions
Use express sessions to save data to the session using a `POST` endpoint and access that saved data using a `GET` endpoint.

### App 8 - Middleware
- Create a top-level middleware function that is used on every request (keyword `USEd`). This function can be as simple as logging something to the console.
  - Create two endpoints to test that your middleware function runs on every request and that the endpoints work properly.
- Create a middleware function to restrict `POST` access to an array to logged in users. 

### App 9 - The Whole Shebang
If you have time, create a whole front to back app that uses and Angular front end rather than Postman.
