
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Bill-Tracker</h3>

  <p align="center">
    A simple Bill Tracker built using DRF and React
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
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
    <li><a href="#usage">Usage</a></li>
    
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
A Bill Tracker site, where a user can add/update/delete his/her bills. The project is an example of a simple full-stack web-app built using **Django REST Framework** as backend framework and **React** as frontend framework.

### Built With
Frameworks used in the project:
* [Django](https://www.djangoproject.com/)
* [Django REST Framework](https://www.django-rest-framework.org/)
* [React](https://reactjs.org/)
* [Ant Design](https://ant.design/)



<!-- GETTING STARTED -->
## Getting Started
To setup the project locally, follow the given steps

### Prerequisites
Following software need to be installed in the system:
* [git](https://git-scm.com/downloads)
* [python](https://www.python.org/downloads/)
* [pip](https://pip.pypa.io/en/stable/installing/)
* [virtual environment](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)
* [github-cli](https://github.com/cli/cli) (optional)
* [node](https://nodejs.org/en/download/)

### Installation

1. Clone the repo by
   ```sh
   git clone https://github.com/SubhradeepSS/Bill-Tracker.git
   ```
   or (if [github-cli](https://github.com/cli/cli) is installed)
   ```sh
   gh repo clone SubhradeepSS/Bill-Tracker
   ```
2. Open the project in any source code editor.
3. Navigate to the ```backend``` folder.
4. Activate python virtual environment. (see [here](https://docs.python.org/3/tutorial/venv.html#creating-virtual-environments) for reference)
5. Inside the virtual environment, run
   ```sh
   pip install -r requirements.txt
   ```
6. Navigate to the ```frontend``` folder and run the following command in cli
   ```sh
   npm install
   ```


<!-- USAGE EXAMPLES -->
## Usage
1. For activating backend, navigate to the ```backend``` directory and run the following commands:
```sh
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
```
2. For running the frontend, navigate to the ```frontend``` folder and run:
   ```sh
   npm start
   ```
3. Open http://localhost:3000/ if already not opened.

The site consists of a single page where the already added bills are shown and a form is there for the user to add a new bill or update an exisiting bill(using bill_no).

