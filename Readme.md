# Node.js Email Sender

This project demonstrates how to send emails using Node.js and the `nodemailer` package. It reads email credentials from environment variables and sends an email with attachments.

## Prerequisites

- Node.js installed
- npm (Node Package Manager) installed
- A Gmail account for sending emails

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/nodejs-email-sender.git
    cd nodejs-email-sender
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a  file in the root directory and add your email credentials:
    ```
    EMAIL=your-email@gmail.com
    PASSWORD=your-email-password
    ```

4. Place the files you want to attach (`resume.pdf` and ) in the root directory of the project.

## Usage

Run the script to send the email:
```sh
node index.js