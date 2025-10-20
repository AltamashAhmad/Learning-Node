# Personal Note Keeper API

This project is a simple REST API for managing notes, built using only the core Node.js `http` module. The goal is to understand the fundamentals of creating a backend server without relying on external frameworks like Express.

## Phase 2: Core HTTP Module and Routing

### Objective
Build a simple backend server using the pure Node.js `http` module to understand:
- How the HTTP server works under the hood.
- How routing is manually handled.
- How request/response objects are structured.
- How to parse incoming data.
- How to respond with JSON/HTML.
- How to modularize route handling.

---

## Project Setup

### 1. Initializing the Project with npm

*   **Concept:** Before writing any server code, we initialize the project as a Node.js package. This allows us to use the Node Package Manager (`npm`).
*   **Command:** `npm init -y`
*   **Purpose:**
    *   This command creates a `package.json` file in the project root.
    *   The `package.json` file acts as a manifest, containing metadata like the project name, version, and the entry point (`main`).
    *   Most importantly, it allows `npm` to manage project dependencies. We can now install, update, and remove third-party libraries easily.

---

## Concepts Mastered

*This section will be updated as you complete each part of the project.*

1.  **Setting up a Core HTTP Server (`http.createServer`)**
    *   **What is HTTP?**
        *   HTTP stands for **HyperText Transfer Protocol**. It's the foundational protocol of the World Wide Web.
        *   It defines a standard set of **rules** for how clients (like browsers) and servers communicate. This includes the format of requests (e.g., `GET /notes`, `POST /data`) and responses (e.g., status codes, headers, body content).
        *   It is **stateless**, meaning each request from a client to a server is treated as an independent transaction.

    *   **The `http` Module in Node.js:**
        *   Node.js provides a built-in `http` module that allows us to create web servers. Since it's a core module, no installation is needed.
        *   This module gives us low-level control, making it perfect for understanding how web servers work from the ground up. Frameworks like Express are built on top of this `http` module.

    *   **How `http.createServer()` Works:**
        *   The `http.createServer()` method creates an instance of `http.Server`.
        *   It takes a **request listener** callback function as an argument. This function is the heart of the server; it's executed **every time** a new HTTP request hits the server.
        *   The listener function receives two critical objects:
            *   `req` (Request): An object containing all information about the client's request, such as the URL (`req.url`), the HTTP method (`req.method`), and headers (`req.headers`).
            *   `res` (Response): An object used to build and send a response back to the client. We use methods like `res.writeHead()` to set headers and `res.end()` to send the response body and finish the communication.

    *   **Architecture Diagram:**

        ```mermaid
        graph TD
            subgraph Client
                A[Browser/Postman]
            end
            subgraph "Node.js Application"
                B(HTTP Server)
                C{Request Listener Callback}
                D[Your Logic]
            end

            A -- "Sends HTTP Request (e.g., GET /notes)" --> B;
            B -- "Receives request, passes req & res objects" --> C;
            C -- "Executes your code" --> D;
            D -- "Uses 'res' object to build response" --> B;
            B -- "Sends HTTP Response (e.g., 200 OK + JSON data)" --> A;
        end
        ```
2.  **Manual Routing (`req.url`, `req.method`)**
    *   *Learnings to be added here.*
3.  **Handling GET Requests**
    *   *Learnings to be added here.*
4.  **Reading from the File System (`fs.readFile`)**
    *   *Learnings to be added here.*
5.  **Handling POST Requests and Parsing JSON Body**
    *   *Learnings to be added here.*
6.  **Writing to the File System (`fs.writeFile`)**
    *   *Learnings to be added here.*
7.  **Handling DELETE Requests**
    *   *Learnings to be added here.*
8.  **Modularizing Routes**
    *   *Learnings to be added here.*
