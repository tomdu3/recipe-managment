
# CookItEasy - Recipe Management System

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express.js](https://img.shields.io/badge/Express.js-4.x-blue)
![Mongoose](https://img.shields.io/badge/Mongoose-7.x-orange)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen)
![Postman](https://img.shields.io/badge/Postman-API%20Documentation-orange)

CookItEasy is a **CRUD (Create, Read, Update, Delete)** application designed to manage recipes. It is built using **Node.js**, **Express.js**, and **Mongoose** for MongoDB integration. The application follows the **MVC (Model-View-Controller)** pattern and includes comprehensive API documentation using **Postman**.

---

## Features

- **Create Recipe**: Add a new recipe to the database.
- **Get All Recipes**: Retrieve a list of all recipes.
- **Get Recipe by ID**: Fetch a single recipe by its unique ID.
- **Update Recipe**: Modify an existing recipe by its ID.
- **Delete Recipe**: Remove a recipe from the database by its ID.

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **API Documentation**: Postman
- **Deployment**: Render

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/pes-app.git
   cd pes-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     PORT=3000
     MONGODB_URI=your_mongodb_connection_string
     ```

4. **Run the server**:
   ```bash
   npm start
   ```
   The server will start at `http://localhost:3000`.

---

## API Endpoints

### 1. Create a Recipe
- **Endpoint**: `POST /api/recipes`
- **Request Body**:
  ```json
  {
    "title": "Pasta",
    "ingredients": ["Pasta", "Tomato Sauce", "Cheese"],
    "instructions": "Boil pasta, add sauce, and sprinkle cheese."
  }
  ```
- **Response**:
  ```json
  {
    "_id": "64f1b2c3e4b0a1a2b3c4d5e6",
    "title": "Pasta",
    "ingredients": ["Pasta", "Tomato Sauce", "Cheese"],
    "instructions": "Boil pasta, add sauce, and sprinkle cheese.",
    "createdAt": "2023-10-01T12:00:00.000Z",
    "updatedAt": "2023-10-01T12:00:00.000Z"
  }
  ```

### 2. Get All Recipes
- **Endpoint**: `GET /api/recipes`
- **Response**:
  ```json
  [
    {
      "_id": "64f1b2c3e4b0a1a2b3c4d5e6",
      "title": "Pasta",
      "ingredients": ["Pasta", "Tomato Sauce", "Cheese"],
      "instructions": "Boil pasta, add sauce, and sprinkle cheese.",
      "createdAt": "2023-10-01T12:00:00.000Z",
      "updatedAt": "2023-10-01T12:00:00.000Z"
    }
  ]
  ```

### 3. Get Recipe by ID
- **Endpoint**: `GET /api/recipes/:id`
- **Response**:
  ```json
  {
    "_id": "64f1b2c3e4b0a1a2b3c4d5e6",
    "title": "Pasta",
    "ingredients": ["Pasta", "Tomato Sauce", "Cheese"],
    "instructions": "Boil pasta, add sauce, and sprinkle cheese.",
    "createdAt": "2023-10-01T12:00:00.000Z",
    "updatedAt": "2023-10-01T12:00:00.000Z"
  }
  ```

### 4. Update Recipe by ID
- **Endpoint**: `PUT /api/recipes/:id`
- **Request Body**:
  ```json
  {
    "title": "Spicy Pasta",
    "ingredients": ["Pasta", "Tomato Sauce", "Cheese", "Chili Flakes"],
    "instructions": "Boil pasta, add sauce, sprinkle cheese, and add chili flakes."
  }
  ```
- **Response**:
  ```json
  {
    "_id": "64f1b2c3e4b0a1a2b3c4d5e6",
    "title": "Spicy Pasta",
    "ingredients": ["Pasta", "Tomato Sauce", "Cheese", "Chili Flakes"],
    "instructions": "Boil pasta, add sauce, sprinkle cheese, and add chili flakes.",
    "createdAt": "2023-10-01T12:00:00.000Z",
    "updatedAt": "2023-10-01T12:05:00.000Z"
  }
  ```

### 5. Delete Recipe by ID
- **Endpoint**: `DELETE /api/recipes/:id`
- **Response**:
  ```json
  {
    "message": "Recipe deleted successfully"
  }
  ```

---

## Error Handling

The API includes proper error handling for:
- Invalid request payloads.
- Missing or invalid recipe IDs.
- Database connection issues.

---

## Postman Documentation

For detailed API documentation, including sample requests and responses, refer to the Postman collection:
[Postman API Documentation](https://www.postman.com/)

---

## Deployment

The application is deployed on **Render**. You can access it here:
<!-- TODO: add real link on deployment -->
[CookItEasy Live Demo](https://cookiteasy-app.onrender.com)

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author

[Tomislav Dukez](https://github.com/tomdu3)

---

Feel free to modify this template to suit your project's specific details!
