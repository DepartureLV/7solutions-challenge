# 7 Solutions challenge

This is the solution for the 7solutions challenge. it contains 2 challenge and each will be in the seperate directory

- **Auto Delete Todo List**
- **Create data from API** (Optional)

## Auto Delete Todo List

### Demo
[Demo Link](https://auto-delete-todo-list.vercel.app/)

### Getting Started

To run project locally:

1. Navigate to project directory `cd 1st-challenge`
2. run `npm install`
3. run `npm run dev` to start the server

### Tools

1. Vite + React
2. Typescript

## Create data from API (Optional)

### Getting Started
This should be able to view via the link but if you want to checkout the repo and start the project

1. `cd 2nd-challenge`
2. run `npm install`
3. create `.env` file and copy the content from `.env.example`
4. run `npm run start` to start the server (it should start on port 8000, if you want to change the port you can change it in the `.env` file)
5. run `npm run test` to test against the endpoints and functions

### API Endpoints
| Method | Endpoint | Description |
| --- | --- | --- |
| GET | /api/department | Get all department summary data |

### Project structure
This project follows the MVC (Model-View-Controller) architecture (note: there’s no UI in this project).

- `routes` will call `controller`
- `controller` will call `service (Model)` to get the data and return

```
2nd-challenge
|-- service (Model)
|   |-- userService.ts
|-- controller (Controller)
|   |-- departmentController.ts
|-- routes
|   |-- departmentRoutes.ts
|-- utils
|-- types
|-- test
|-- index.ts
```

### Tools
1. NodeJS
2. Express
3. Typescript
4. JEST
