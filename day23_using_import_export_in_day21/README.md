# Student Management API Documentation

Welcome to the Student Management API. This document provides a clear guide on how to interact with the available endpoints.

## Base URL

All API endpoints are relative to the following base URL:
https://your-api-domain.com/api/students

---

## Student Data Object

The primary data object in this API is the Student object.

### Student Object Structure

| Field           | Type   | Description                                         | Required |
| --------------- | ------ | --------------------------------------------------- | -------- |
| id              | String | Unique identifier for the student (auto-generated). | -        |
| name            | String | The full name of the student (3-50 characters).     | Yes      |
| dob             | Date   | Date of Birth in ISO format (e.g., "1998-12-15").   | Yes      |
| gender          | String | Must be one of: "male", "female", "other".          | Yes      |
| address         | Object | Nested object containing address details.           | No       |
| address.country | String | Country name.                                       | No       |
| address.state   | String | State name.                                         | No       |
| address.city    | String | City name.                                          | No       |
| address.pin     | String | 6-digit postal PIN code.                            | No       |

### Example Student Object

json
{
"id": "65168d1843b099f660773b12",
"name": "Jane Doe",
"dob": "2002-05-20T00:00:00.000Z",
"gender": "female",
"address": {
"country": "India",
"state": "West Bengal",
"city": "Kolkata",
"pin": "700001"
}
}

---

## API Endpoints

### 1. Get All Students

Retrieves a list of all student records.

- _Method_: GET
- _Endpoint_: /
- _Success Response_:
  - _Code_: 200 OK
  - _Content_: An array of student objects.
    json
    [
    {
    "id": "65168d1843b099f660773b12",
    "name": "Jane Doe",
    "dob": "2002-05-20T00:00:00.000Z",
    "gender": "female",
    "address": { ... }
    },
    {
    "id": "65168d1f43b099f660773b15",
    "name": "John Smith",
    "dob": "2001-10-02T00:00:00.000Z",
    "gender": "male",
    "address": { ... }
    }
    ]

---

### 2. Create a New Student

Creates a new student record.

- _Method_: POST
- _Endpoint_: /
- _Request Body_: A JSON object with the student's details.

  _Example Request Body:_
  json
  {
  "name": "Gourab Talukdar",
  "dob": "1999-01-25",
  "gender": "male",
  "address": {
  "country": "India",
  "state": "West Bengal",
  "city": "Debagram",
  "pin": "741126"
  }
  }

- _Success Response_:

  - _Code_: 201 Created
  - _Content_: The newly created student object.

- _Error Response_:
  - _Code_: 400 Bad Request (If validation fails)
  - _Content_:
    json
    {
    "message": "Student validation failed: dob: Date of Birth cannot be a future date."
    }

---

### 3. Get a Single Student by ID

Retrieves the details of a specific student by their unique ID.

- _Method_: GET
- _Endpoint_: /:id
- _URL Parameter_:
  - id (String, required): The ID of the student to retrieve.
- _Success Response_:

  - _Code_: 200 OK
  - _Content_: A single student object.

- _Error Response_:
  - _Code_: 404 Not Found
  - _Content_:
    json
    {
    "message": "Student not found"
    }

---

### 4. Update a Student

Updates the details of an existing student by their ID.

- _Method_: PUT
- _Endpoint_: /:id
- _URL Parameter_:
  - id (String, required): The ID of the student to update.
- _Request Body_: A JSON object containing the fields to be updated. You only need to send the fields you want to change.

  _Example Request Body (updating only the city):_
  json
  {
  "address": {
  "city": "Krishnanagar"
  }
  }

- _Success Response_:

  - _Code_: 200 OK
  - _Content_: The complete, updated student object.

- _Error Response_:
  - _Code_: 404 Not Found
  - _Content_:
    json
    {
    "message": "Student not found"
    }

---

### 5. Delete a Student

Deletes a student record by their ID.

- _Method_: DELETE
- _Endpoint_: /:id
- _URL Parameter_:
  - id (String, required): The ID of the student to delete.
- _Success Response_:
  - _Code_: 200 OK
  - _Content_:
    json
    {
    "message": "Student deleted successfully",
    "student": {
    "id": "65168d1843b099f660773b12",
    "name": "Jane Doe",
    "dob": "2002-05-20T00:00:00.000Z",
    "gender": "female",
    "address": { ... }
    }
    }
- _Error Response_:
  - _Code_: 404 Not Found
  - _Content_:
    json
    {
    "message": "Student not found"
       }


