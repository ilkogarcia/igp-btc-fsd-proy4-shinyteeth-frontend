
# Shiny Teeth - Fontend

This project aims to create a web front to connect with [Shiny Teeth API](https://github.com/ilkogarcia/avocadogeeks-btc-fsd-shinyteeth). A Rest API previously developed that implements the business rules for a generic dental clinic.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


### Related projects

This project is related to the following projects.

* [Shiny Teeth API](https://github.com/ilkogarcia/avocadogeeks-btc-fsd-shinyteeth) : In this project we build a functional API for a dental clinic. The API is connected to a relational database.

---
## Screenshots

![Home page](https://res.cloudinary.com/dtxhybmyx/image/upload/v1679676556/shinyteeth/shinyteeth_front_screenshot_1_bpb9if.png)
_* Home page screenshot._

![Sign In](https://res.cloudinary.com/dtxhybmyx/image/upload/v1679676553/shinyteeth/shinyteeth_front_screenshot_1.1_a1oauq.png)
_* Sign In form._

![Sign Up](https://res.cloudinary.com/dtxhybmyx/image/upload/v1679676553/shinyteeth/shinyteeth_front_screenshot_1.2_y4tn2d.png)
_* Sign Up form._

![Users](https://res.cloudinary.com/dtxhybmyx/image/upload/v1679676553/shinyteeth/shinyteeth_front_screenshot_2_sb75qe.png)
_* User management (Admin view)._

![User View/Edit](https://res.cloudinary.com/dtxhybmyx/image/upload/v1679676553/shinyteeth/shinyteeth_front_screenshot_3_txoc7z.png)
_* User management - View/Edit (Admin view)._

![Appointments](https://res.cloudinary.com/dtxhybmyx/image/upload/v1679676554/shinyteeth/shinyteeth_front_screenshot_8_fwoymm.png)
_* My appointments (Patients view)._

![Appointment details](https://res.cloudinary.com/dtxhybmyx/image/upload/v1679676554/shinyteeth/shinyteeth_front_screenshot_7_wmthes.png)
_* Appointment details (Patients view)._

---
## Roadmap

Everything can be improved and this project is no exception. :) Some little things that I have pending to incorporate in the near future.

- refactor: Write tests for each React component
- fix: Axios interceptor to inject token in the request header
- feat: As a user, I want to reset my password
- feat: As a user, I want to reschedule an appointments
- feat: As a user, I want to get a new appointment
- feat: As an Admin, I want to CRUD medical specialties
- feat: As an Admin, I want to CRUD medical tretments

---
## Run Locally

### Requirements

For development, you will only need Node.js installed on your environement. 

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/). You should be able to run the following command after the installation procedure
below.

    $ node --version
    v18.14.0

    $ npm --version
    9.3.1

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in

    `/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer. Also, be sure to have `git` available in your PATH, `npm` might need it.

### Install

Clone the project

    $ git clone https://github.com/ilkogarcia/igp-btc-fsd-pry2-restaurant.git

Go to the project directory

    $ cd PROJECT

Install dependencies

    $ npm install

### Start & watch

    $ npm run start

### Simple build for production

    $ npm run build

### Update sources

Some packages used might change so you should run `npm update` to ensure all packages listed are updated to the latest version (specified by the tag config). Additionally you can run  `npm prune` to remove "extraneous" packages.


---
## Languages & tools

### HTML

- [HTML](https://dev.w3.org/html5/spec-LC/): Html5
  
### CSS

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): Cascading Style Sheets CSS3
  
### JavaScript

- [React](https://react.dev/): library for web user interfaces.
- [React Router](https://reactrouter.com/): handle client and server-side routing.
- [Redux](https://redux.js.org/): predictable state container.
- [React Bootstrap](https://react-bootstrap.github.io/): front-end UI framework.
- [Axios](https://axios-http.com/): Promise based HTTP client for the browser and node.js.
- [prop-types](https://www.npmjs.com/package/prop-types): runtime type checking for React props.
- [dayjs](https://www.npmjs.com/package/dayjs): parses, validates, manipulates, and displays dates and times.
- [react-jwt](https://www.npmjs.com/package/react-jwt): decoding json web tokens (JWT)react-jwt.
- [webfontloader](https://www.npmjs.com/package/webfontloader): load fonts from Google Fonts.
- [notistack](https://www.npmjs.com/package/notistack): display App notifications.
- [dotenv](https://www.npmjs.com/package/dotenv): loads environment variables from a .env file.
  
### Tools
- [Node](http://nodejs.org/): runtime environment for JavaScript.
- [Vite](https://vitejs.dev/): set up development environment.
- [VSCode](https://code.visualstudio.com/): code editing.
- [ESLint](https://eslint.org/): find and fix problems in code.
- [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard): JavaScript style guide, linter, and formatter.
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) React specific linting rules for eslint.
- [Redux Toolkit](https://developer.mozilla.org/en-US/docs/Web/CSS): toolset for efficient Redux development.
  
_Additionaly we use [Cloudinary](https://cloudinary.com/) API to store, transform, optimize, and deliver all media assets._


---
## Best practices

I have tried to follow this best practices when coding:

- Using functional components and hooks instead of classes. Use functional components and hooks more often as they result in more concise and readable code compared to classes
- Avoid using state (if possible). Avoid using state as much as possible since the more state you use, the more data you have to keep track of across your app.
- Use component-centric folder structure. Organize files related to the same component in one folder. 
- Avoid using indexes as key props. Use a unique value as the index to ensure that the identity of the list item is maintained.
- Opt for fragments instead of divs where possible. Using <div> increases the DOM size.
- Follow naming conventions. Use camelCase for functions declared inside React components like handleInput() or showElement().
- Avoid repetitive code.  Break down the project into small components I can reuse across the application.
- Use object destructuring for props. Instead of passing the props object, use object destructuring to pass the prop name. This discards the need to refer to the props object each time you need to use it.
- Dynamically render arrays using map.

_I have pending to include the [Jest](https://jestjs.io/) testing frameworks in this project and write tests for each react component as it reduces the possibility of errors._

---
## Feedback and support

All feedbacks are welcome. Also, if you need some help to deploy the code or run it in your local environment, please reach out to me at ilko.garcia@gmail.com

