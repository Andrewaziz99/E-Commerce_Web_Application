# E-Commerce Web Application using MERN Stack and Microservices Architecture

## Description
This is a web application for an e-commerce store that sells games. It is built using the MERN stack and Microservices Architecture. It has a user interface for the customers to view the products and add them to their cart. The application is built using the Microservices Architecture, where each service is a separate Node.js application.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

## Usage

1. Create a .env file in the root directory and add the following environment variables (replace all #### with your own values):
```bash
PORT=####
MONGO_USERNAME=####
MONGO_PASSWORD=####
MONGO_CLUSTER=####
MONGO_DBNAME=####
ACCESS_TOKEN=####
```
2. Run the following command to start the application:
```bash
npm run dev
```
3. Open the following URL in your browser:
```bash
http://localhost:<port_no>/
```

4. Or you can use docker-compose to run the application:
```bash
docker-compose up
```
5. Show the running containers:
```bash
docker ps
```
6. Get the container ip address:
```bash
docker inspect <container_id> | grep "IPAddress"
```
7. Open the following URL in your browser:
```bash
http://<container_ip_address>:<port_no>/
```
8. To run the frontend application, run the following command:
```bash
cd frontend
npm install
npm run dev
```
9. Open the following URL in your browser:
```bash
http://localhost:5173/
```
## Products json file
- [Products json file](https://github.com/Andrewaziz99/E-Commerce_Web_Application/blob/main/products.json)

## Technologies
- [React vite](https://vitejs.dev/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Microservices Architecture]()

## Contributers 
- [Thomas Maged](https://github.com/Thomas-Maged)
- [Maximous Atef](https://github.com/Maxiatef)
- [Kirollos Nessim](https://github.com/KirollosNessem)
- [Ramez Hesham](https://github.com/RamezHesham)
- [Yara Wael](https://github.com/yara880)
- [Nourhane Amir](https://github.com/NourhaneAmir)