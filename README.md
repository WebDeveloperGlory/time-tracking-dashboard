# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

A mobile friendly time-tracking-dashboard template made using React.js

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- First transferred the data.json files into an index.js file in constants
- Built the basic jsx structure of the required components
- Wrote the logic to map through the info in the constants file and display on screen in  their required components
- Wrote the logic to control the single state needed to change tracked data on selecting the desired timeframe
- Cleaned up the logic code a little to reduce lines of code
- Styled the components for deskop
- Made the whole design responsive
- Added minor tweaks to displays on hover

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

- Learnt about the ```.replace()``` for removing unwanted characters from a string and used in a loop

```js
let past = timeframe === "daily" ? "Yesterday" : `Last ${timeframe.replace('ly', '')}`;
```

### Continued development

- Revising to write cleaner more concise code
- Revising to add comments to my logic for future reference

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
