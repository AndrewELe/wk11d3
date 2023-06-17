# technologies used
## --------------------
## technologies used include javascript, monogoDB, mongoDB-Memory-Server, mongoose, express, jest, supertest, morgan, nodemon, and finally dotenv

# explination of design
## --------------------
## the design of the project is built under the CRUD and MVC guidelines. Efforts were made to parse out and group specfic functionality into its own files for futre maintenence, ease of altercation and updating, and clean DRY code.

## root path = /todos
## user can post (create), put (update or change), get (capture a specific todo item), delete and list todo items

## json body must include 
## {
## title: "(title as a string)",
## description: "(description as a string)",
## completed: boolean value
## }

# how to run
## --------------------
## to run the project download the file path "todo", load the required node_modules indicated by the package.json file and include your own mongoDB connection in an .env file in the root path of the project. After these steps npm run dev to start the api on port 3000 and npm run test/load to check for functionality of the api project.

# discussion of load test results
## there seems to be timeout errors when loading higher number of scenarios which indicate that improvements to the code could be made to compensate for higher loads. <br>
## see attached: 

<br>All virtual users finished<br>
<br> Summary report @ 21:18:13(-0400) 2023-06-15 <br>
  Scenarios launched:  1200 ||
  Scenarios completed: 359 ||
  Requests completed:  1180 ||
  Mean response/sec: 27.89 ||
  Response time (msec): ||
    min: 12 ||
    max: 9988 ||
    median: 73.5 ||
    p95: 8772.5 ||
    p99: 9579 ||
  Scenario counts: ||
    0: 1200 (100%) ||
  Codes: ||
    200: 1180 ||
  Errors: ||
    ETIMEDOUT: 841 ||