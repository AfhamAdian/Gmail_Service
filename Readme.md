# Node.js Email Sender

This project demonstrates how to send emails using Node.js and the `nodemailer` package. It reads email credentials from environment variables and sends an email with attachments.

## Prerequisites

- Node.js installed
- npm (Node Package Manager) installed
- A Gmail account for sending emails

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/AfhamAdian/Gmail_Service.git
    cd Gmail_Service
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a  file in the root directory and add your email credentials:
   As google secured policy 2022, you cannot authorize it with your normal password.
   ```
   Go to 2 step verification -> App Password -> Generate App Password .
   ```
    Use this App Password as Password in .env
   
    ```
    EMAIL=your-email@gmail.com
    PASSWORD=your-email-password
    ```
4. Place the files you want to attach (`resume.pdf` and ) in the attachments directory of the project.

## Usage

Run the script to send the email:
```sh
node index.js
