# Project Title

![License](https://avatars.githubusercontent.com/u/151150753?v=4)

## Description

A brief description of your project, its purpose, and what problem it solves. Provide context about the project and its features.

## Table of Contents

- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Demo

Include a demo or screenshot of the project in action.

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for Node.js
- **Sequelize**: ORM for SQL databases
- **JWT**: Authentication using JSON Web Tokens
- **bcrypt**: Password hashing library
- **PostgreSQL/MySQL**: Database (replace with the actual database used)

## Installation

Follow these steps to get a local copy up and running:

1. Clone the repository:
   ```bash
   git clone https://github.com/coder1haseeb/JWT-Token-Authentication-Complete.git
   ```

2. Navigate to the project directory:
   ```bash
   cd JWT-Token-Authentication-Complete
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and configure your environment variables:
   ```plaintext
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   ```

## Usage

To start the server, run the following command:

```bash
nodemon server.js
```

Visit `http://localhost:3000` in your browser or Postman to see the application in action.

## API Endpoints

| Method | Endpoint         | Description        |
|--------|-----------------|-------------------|
| POST   | `/users/register` | Register a new user |
| POST   | `/users/login`    | Log in a user      |

### Example Request

**Register User**
```http
POST /users/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "yourpassword"
  "phoneNumber" : "123-456-7890",
}
```

### Example Response
```json
{
  "message": "User created successfully.",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "phoneNumber" : "123-456-7890",
  },
  "status": 200
}
```

## Testing

To run tests for your application, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Your Name - coder.haseeb@gmail.com
GitHub: [Coder1Haseeb](https://github.com/coder1haseeb)

Feel free to reach out if you have any questions or suggestions!

---