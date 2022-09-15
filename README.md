# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

- The challenge is to build out the the tip calculator with the functionalities listed below :

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

Below are the mobile and desktop views of the completed app.

![screenshot](./Screen%20Shot%202022-09-15%20at%2014.52.44-fullpage.png)

![screenshot](./Screen%20Shot%202022-09-15%20at%2014.52.50-fullpage.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

- I reviewed using desktop-first workflow to achieve responsiveness. I usually default to mobile-first, but since css wasn't the major focus of this app, I decided to practice going desktop-first.

- A very important take-away i got from this project was that - 'When you have a global variable, and you update it's value somehow, within a function, and you need another function to have access to that newly updated value, simply call that next function within the initial function, after modifying the variable'. This seems basic, but apparently I needed to practice this basic concept because I initially was trying to pass 'updated' values around via arguments in function calls. While this is viable and might work, the fact that this calculator app needs to always be calculating even on edit (a specific functionality) means at some points, there'll be functions that require arguments but there's simply none, because those parameters weren't necessary in the first place.

  That was long, but it'll definately serve as a personal note to self, as regards something very basic!

- Another practical lesson from this project was - whenever there's a group of buttons with the same class, and when one is clicked, it should show some styling. This seems straightforward, but then when another button is clicked, the styles should 'disappear' from the previous one, and show on the newly clicked one.
  The simplest solution here, again another possible note to self, is, after selecting all the buttons - e.g. with querySelector, and looping through the nodelist, adding the appropriate event listener, within that loop, loop through all the buttons again to remove the 'active' class from all of them, and then add it back to the clicked button.
  Link to a helpful article is provided below.

### Useful resources

- [Multiple buttons looking like they're staying pessed one at a time.](https://dev.to/nicm42/multiple-buttons-looking-like-theyre-staying-pressed-one-at-a-time-4bbb)

## Author

- GitHub - [presh-031](https://github.com/presh-031)

- Frontend Mentor - [@presh-031](https://www.frontendmentor.io/profile/presh-031)

- Twitter - [@presh-031](https://twitter.com/Presh_031)
