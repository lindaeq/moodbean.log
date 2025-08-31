# ☕ moodbean.log

[![Athena Award Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Faward.athena.hackclub.com%2Fapi%2Fbadge)](https://award.athena.hackclub.com?utm_source=readme)

## live demo 🔗
Try it live here: [https://moody-pearl.vercel.app/](https://moody-pearl.vercel.app/)

## description 📝
Moodbean.log is an interactive web app that lets users track their daily mood using coffee brews. Select your brew, add a note about your day, and see your moods visualized in a calendar heatmap. It's a simple, fun way to journal your mood while enjoying your favorite coffee vibes!  

## features ✨
- Select a brew for the day (light latte, caramel, medium, dark, espresso)
- Add a personal note (up to 300 characters)
- View your daily moods on a calendar heatmap
- Fixed brew display rectangle to highlight the selected brew
- Note wraps naturally next to the brew rectangle
- Real-time character count feedback for notes
- Interactive, clickable calendar to update moods  

## how to use 🛠️
1. Navigate to the [live app](https://moody-pearl.vercel.app/).
2. Select a coffee brew that represents your mood for the day.
3. Add a short note about your day in the note field.
4. Click **Submit** to save your mood for that day.
5. Click any day on the calendar to view or update your mood and note.

## challenges faced ⚡
- Implementing a fixed brew rectangle while allowing the note to wrap dynamically beside it
- Managing the calendar grid and handling clicks for pending and saved moods
- Ensuring proper text wrapping and spacing for notes, including multi-line constraints
- Handling character limits and live character counter updates
- Maintaining a responsive, visually consistent layout

## what i learned 📚
- Advanced React state management techniques (useState, props, and callbacks)
- Dynamic styling in React based on state and conditional classes
- CSS layout techniques: grid, flexbox, fixed positioning, and transformations
- Handling user input validation and live feedback for text areas
- Building a fully interactive calendar heatmap and visual feedback system

## technologies used 💻
- HTML5 & CSS3
- Figma
- JavaScript (ES6+)
- React
- Vercel for deployment

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
