## PPSKSY Hausaufgabe 2

## Setup instructions: 

1. Run command below from the backend directory to build it

```
./gradlew build
```

2. Deploy the project with:

````
docker-compose up
````

3. Access the frontend at http://localhost:6969

## API endpoints:

GET: /allTodos -> Returns a list of all todos

GET: /todo?id= ->  Returns todo of specified id

GET: /delete?id= -> Deletes id of specified todo

POST: /todo -> Saves todo specified in the body of the request

POST: /edit -> Update an existing todo specified in the request body
