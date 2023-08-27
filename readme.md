# Record keeper

This is the backend API for the contact keeper application. 

This app includes a Node.js/Express REST API that uses MongoDB for a database. 



## Usage

### Install Dependencies

Install dependencies on the back-end

```bash
npm install

```

### Back-end/Express Server

```bash
npm start
```

or

```bash
npm run dev (Nodemon)
```

Visit `http://localhost:8000`





### Environment Variables

Rename `.env-example` to `.env` and add your MongoDB URI to the `.env` file.

```
MONGO_URI=your_mongodb_uri
```

## REST Endpoints

### Ideas

| Endpoint       | Description    | Method | Body                    |
| -------------- | -------------- | ------ | ----------------------- |
| /api/teachrecords     | Get teachers  | GET    | None                    |
| /api/studrecords | Get students | GET    | None                    |
| /api/teachrecords     | Add teacher       | POST   | {nationalID,title,firstname,surname,dateOfBirth,
teacherNumber,salary
} |
| /api/studrecords| Add student    | POT    | {"nationalID","firstname","surname","dateOfBirth","studentNumber"
} |


Deployed to render with the API url below:
.
