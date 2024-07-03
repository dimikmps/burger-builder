<!-- Improved compatibility of back to top link: :  -->
<a name="readme-top"></a>


<!-- PROJECT SHIELDS -->
<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

</div>

<br />
<div align="center">
  <h3 align="center">BurgerBuilder</h3>
 <h5>A burger creation React app</h5>
  <p align="center">
    <a href="https://github.com/dimikmps/burger-builder/issues/new?labels=bug">Report Bug</a>
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
        <li><a href="#installation--deployment">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


The Burger Builder app enables users to craft personalized burgers by selecting from a variety of available ingredients. To begin, users must log in using valid credentials to access the ingredient list sourced from an external API. Ingredients can be added to the burger, stacking newly selected items on top of any existing ones. Individual ingredients can be removed by clicking on them. The app is designed to be fully responsive, ensuring a seamless user experience across different screen sizes.

Key Features:

- Authentication
  - User authentication via a secure login form with validation.
  - Integration with an external authentication API for token-based authentication.
  - Display of an informational modal when incorrect credentials are provided or upon any other authentication error.
- Burger Creation
  - Dynamic fetching of ingredients from an external API.
  - Utilization of API-provided images for dynamic representation.
  - Addition of new ingredients on top of existing ones within the burger.
  - Interactive removal of any selected ingredients.
- Responsive Design
  - Implementation of responsive layouts using media queries and custom grid systems.
  - Conditional rendering of UI elements tailored for large and small screens.
  - Utilization of dynamic styled components for enhanced UI customization.



<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![MUI][MUI]][MUI-url]
* [![CreateReactApp][CreateReactApp]][CreateReactApp-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local deployment up and running, please follow these simple example steps.

### Prerequisites

A latest version of npm is needed to install all necessary packages and run the project.

  ```sh
  npm install npm@latest -g
  ```


### Installation & deployment

Follow the steps below to get the project up and running:

1. Clone the repo
   ```sh
   git clone https://github.com/dimikmps/burger-builder.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Serve locally
   ```sh
   npm run start
   ```



<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] API Integrations
  - [x] Implement authentication via external API endpoint
  - [x] Integrate ingredient retrieval from external API endpoint
- [x] App Components
  - [x] Add Content container component
  - [x] Add Header component
  - [x] Add Login form
  - [x] Add Ingredient selection pane
  - [x] Add Burger preview/managemement component
  - [x] Add Error Modal for user login process feedback



See the [open issues](https://github.com/dimikmps/burger-builder/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Dimitris Kampas - [LinkedIn][linkedin-url]

Project Link: [https://github.com/dimikmps/burger-builder](https://github.com/dimikmps/burger-builder)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Best-README-file](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- PROJECT SHIELDS -->

[contributors-shield]: https://img.shields.io/github/contributors/dimikmps/burger-builder.svg?style=for-the-badge
[contributors-url]: https://github.com/dimikmps/burger-builder/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/dimikmps/burger-builder.svg?style=for-the-badge
[forks-url]: https://github.com/dimikmps/burger-builder/network/members

[stars-shield]: https://img.shields.io/github/stars/dimikmps/burger-builder.svg?style=for-the-badge
[stars-url]: https://github.com//dimikmps/burger-builder/stargazers

[issues-shield]: https://img.shields.io/github/issues/dimikmps/burger-builder.svg?style=for-the-badge
[issues-url]: https://github.com/dimikmps/burger-builder/issues

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/dkampas


<!-- MARKDOWN LINKS & IMAGES -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[MUI]: https://img.shields.io/badge/-mui-js?style=for-the-badge&logo=mui&logoColor=white&color=%23007FFF
[MUI-url]: https://mui.com/

[CreateReactApp]: https://img.shields.io/badge/-createreactapp-js?style=for-the-badge&logo=createreactapp&logoColor=white&color=%2309D3AC
[CreateReactApp-url]: https://create-react-app.dev/
