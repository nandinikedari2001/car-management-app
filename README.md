# car-management-app

## Description

This Car Management Application is a web-based tool built using Node.js. It provides an interface for both users and admins to manage car records. Users can view cars listed by the admin, while admins can log in to create, read, update, and delete car records. The application is deployed on Netlify and includes a login page with a link to a PDF file titled "Website Development Assignment."

## Technologies Used

- **Backend:** Node.js
- **Frontend:** HTML, CSS, JavaScript
- **Database:** In-memory (for demo purposes)
- **Authentication:** bcryptjs for password hashing
- **Deployment:** Netlify

## Features

### Admin Features
- **Admin Login:** Secure login functionality. The login page displays "Assignment for Quadiro Technologies."
- **CRUD Operations:** Create, read, update, and delete car records.
  - Each car record includes "car name," "manufacturing year," and "price."
- **Dashboard:** View a list of cars and basic statistics like the total number of cars.

### User Features
- **User Login:** Secure login functionality. The login page displays "Assignment for Quadiro Technologies."
- **View Cars:** Users can view a list of cars managed by the admin.

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or higher)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/nandinikedari2001/car-management-app.git
    cd car-management-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the application:**

    ```bash
    npm start
    ```

    The application will start on `http://localhost:3000`.

### Accessing the Application

- **User Interface:** Go to `http://localhost:3000` and log in with user credentials.
- **Admin Interface:** Go to `http://localhost:3000/admin` and log in with admin credentials.

### Authentication

- **Admin Credentials:**
  - Username: `admin`
  - Password: `adminpassword`
- **User Credentials:**
  - Username: `user`
  - Password: `userpassword`

### PDF File

- **Assignment PDF:** Available at [http://localhost:3000/pdf/Website_Development_Assignment.pdf](http://localhost:3000/pdf/Website_Development_Assignment.pdf)

## Deployment

This application is deployed on Netlify. You can view the live application at [https://your-app-name.netlify.app](https://your-app-name.netlify.app).

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes. 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please contact Nandini Kedari(mailto:kedarinandini1503@gmail.com).

---
