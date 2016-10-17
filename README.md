# Node Drills
Each standalone app below builds on the previous app(s). The instructions given are only for the current app, with the assumption that you don't need repeat instructions for the previous steps.

### App 1 - Setup
Create a package.json file and install/save dependencies (like express, body-parser, etc).

### App 2 - Listen
Set up an express server that listens on port 3000.

### App 3 - Get and post
Create `GET` and `POST` endpoints for the items array. Send the results with an `ok` status code.

### App 4 - JS files
Export the data in the data.js file and require it in your index.js file. Create `GET` and `POST` endpoints for the data and send the results with an `ok` status code.

### App 5 - CRUD, Queries and params

Create CRUD endpoints on the supplied data.  You will want to use it, and mimic it's format when adding new data.

- 1) Create an endpoint to `GET` all objects.
- 2) Create an endpoint to `POST` a new object.
- 3) Create an endpoint to get one item by index/id. Hint: Use `req.params`
- 1b) Update endpoint #1 to look for query parameters and get only matching items.
- 4) Create an endpoint to remove an object by index/id. Hint) Use `req.params`
- 5) Create an endpoint that can update one object by id. Hint: Use `req.query` to determine which properties to update

### App 6 - Serve Static Files
Use express to serve the static files in the public folder.

### App 7 - Sessions
Use express sessions to save data to the session using a `POST` endpoint and access that saved data using a `GET` endpoint.

### App 8 - Middleware
- Create a top-level middleware function that is used on every request (keyword `USE`). This function can be as simple as logging something to the console.
  - Create two endpoints to test that your middleware function runs on every request and that the endpoints work properly.
  
### App 9 - Middleware 2
- Create a middleware function that checks to see if there is a current user logged in (see the `login` endpoint to see what happens when someone logs in). If there is no user logged in, end the function with a `forbidden` or `unauthorized` status code. If there is a user, return next.
- Apply that middleware to all routes dealing with `admin` things.
- Test your middleware. If you try to hit the admin endpoints without logging in first, you should see an empty response and your `forbidden` or `unauthorized` status code. If you log in first, the request will be completed.

### App 10 - The Whole Shebang
If you have time, create a whole front to back app that uses an Angular front end rather than Postman.
