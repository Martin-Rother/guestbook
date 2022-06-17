<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Martin-Rother/guestbook">
    <img src="public/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Martin's Guestbook</h3>

  <p align="center">
    This is an example guestbook. 
    <br />
    <a href="https://github.com/Martin-Rother/guestbook"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Martin-Rother/guestbook/issues">Report Bug</a>
    ·
    <a href="https://github.com/Martin-Rother/guestbook/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#running-the-application">Running the Application</a>
      <ul>
        <li><a href="#run-frontend">Frontend</a></li>
        <li><a href="#run-backend">Backend</a></li>
      </ul>
    </li>
    <li>
      <a href="#tests">Tests</a>
            <ul>
        <li><a href="#test-frontend">Frontend</a></li>
        <li><a href="#test-backend">Backend</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is an example project for demonstration purposes.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

-   [Laravel](https://laravel.com)
-   [Vue.js](https://vuejs.org/)
-   [Vuetify](https://vuetifyjs.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You need to install Composer (>= v2.3), NodeJS (>= v16.15) with npm (>= v8.12) and a MySQL database (>= v5.2)

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/Martin-Rother/guestbook.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Install Composer packages
    ```sh
    cd backend && composer install
    ```
4. Enter your database config in `backend/.env` and `backend/.env.testing`
    ```js
     DB_HOST=127.0.0.1
     DB_PORT=3306
     DB_DATABASE=database_name
     DB_USERNAME=username
     DB_PASSWORD=password
    ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Running the Application

### Run frontend

```sh
    npm run dev
```

### Run backend

```sh
    cd backend && php artisan serve
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Tests

### Test frontend

```sh
    npx cypress run
```

### Test backend

```sh
    cd backend && php artisan test
```

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

Project Link: [https://github.com/Martin-Rother/guestbook](https://github.com/Martin-Rother/guestbook)

<p align="right">(<a href="#top">back to top</a>)</p>
