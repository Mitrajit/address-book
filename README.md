# Address Book
## Tech Stack
- Node.js
- Express
- MongoDB
- Mongoose
- Eslint

## Description
A backend server that provides API for CRUD operations on a contacts database in MongoDB.

## Installation
- Clone the repository
- Install dependencies by `npm install`
- Run `npm start` to start the server

## Usage
Use postman to test the API.
- ### Registration
&nbsp;&nbsp;&nbsp;&nbsp;Method: POST <br>
&nbsp;&nbsp;&nbsp;&nbsp;URL: /register<br>
&nbsp;&nbsp;&nbsp;&nbsp;body:
```json
{
    "firstName": "Mitrajit",
    "lastName": "Chandra",
    "email": "chandra.rupam@gmail.com",
    "password": "SuperSecretPassword"
}
```
- ### Login
&nbsp;&nbsp;&nbsp;&nbsp;Method: POST <br>
&nbsp;&nbsp;&nbsp;&nbsp;URL: /login<br>
&nbsp;&nbsp;&nbsp;&nbsp;body:
```json
{
    "email":"chandra.rupam@gmail.com",
    "password":"SuperSecretPassword"
}
```
- ### Get single contact by name
&nbsp;&nbsp;&nbsp;&nbsp;Method: GET<br>
&nbsp;&nbsp;&nbsp;&nbsp;URL: /getSingleContact?name='name'

- ### Get all contacts with pagination
&nbsp;&nbsp;&nbsp;&nbsp;Method: GET<br>
&nbsp;&nbsp;&nbsp;&nbsp;URL: /getAll?page=1
- ### Get contacts by matching phrase
&nbsp;&nbsp;&nbsp;&nbsp;Method: GET<br>
&nbsp;&nbsp;&nbsp;&nbsp;URL: /getContacts?phrase='phrase'
- ### Add single contact
&nbsp;&nbsp;&nbsp;&nbsp;Method: POST<br>
&nbsp;&nbsp;&nbsp;&nbsp;URL: /new<br>
&nbsp;&nbsp;&nbsp;&nbsp;body:
```json
{
    "name": "Krishna",
    "email": "chandra.rupam@gmail.com",
    "phone": "0000000000",
    "address":"Kolkata"
}
```
- ### Add contacts in bulk
&nbsp;&nbsp;&nbsp;&nbsp;Method: POST<br>
&nbsp;&nbsp;&nbsp;&nbsp;URl: /addBulk<br>
&nbsp;&nbsp;&nbsp;&nbsp;body:
```json
[
    {
        "name": "Rahul",
        "email": "rahul@gmail.com",
        "phone": "1111111111",
        "address": "Haldia" 
    },
    {
        "name": "Ratul",
        "email": "ratul@gmail.com",
        "phone": "2222222222",
        "address": "Haldia"
    }
]
```
- ### Update contact by _id
&nbsp;&nbsp;&nbsp;&nbsp; Method: PUT<br>
&nbsp;&nbsp;&nbsp;&nbsp;URL: /update?id='id'<br>
&nbsp;&nbsp;&nbsp;&nbsp;body:
```json
{
    // fields to be updates
    "address": "Kolkata"
}
```
- ### Delete contact by _id
&nbsp;&nbsp;&nbsp;&nbsp;Method: DELETE<br>
&nbsp;&nbsp;&nbsp;&nbsp;URL: /delete?id='id'

