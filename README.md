# Getting Started with Rick and Morty App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Project Description

This app is a small wiki app about the Rick and Morty series, this app allows users to see all characters, locations, and episodes.

This App also allows users to filter through character list by: name, alive status, and gender.

[Live Demo](https://rickandmorty-react-query.netlify.app/)

## Frameworks and Libraries used in this Project

- [React](https://reactjs.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)
- [Chackra UI](https://chakra-ui.com/)

## App Routes

1. Home Page (Contains all characters)
   - Characters/:id Page (Page for each character)
2. Locations Page (Contains all locations)
   - Locations/:id Page (Page for each location and also displays the residents of that location)
3. Episodes Page (Contains all episodes)
   - Episodes/:id Page (Page for each episode and also displays information and characters that appear in that episode)

## Features

- [x] Filter through all characters by their name
- [x] Filter through all characters by their gender
- [x] Filter through all characters by their alive status
- [x] Filter through all characters by species
- [x] Caching data client side
- [x] Responsive UI
- [x] Dark Mode

## Screenshots

- DarK Mode
  ![Alt text](https://i.imgur.com/X4Wwzui.mp4 'Dark Mode')

## Install App steps

> npm i

then ->

> npm start

## Screenshots

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br /> See the section
about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br /> It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is
ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
