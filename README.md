# Introduction

## Summary: What does this project do?

This project searches the unsplash API for photos relating to a search term and displays the images in a CSS grid.

## What technologies/skills/concepts does this project practice?

- Class-based React components
- API call to unsplash with axios

## Under the hood: How does this project work?

State is only managed at the App level, where the API call is performed.
The App renders the ImageList component by passing an images prop (the array of images returned from unsplash)
The ImageList component renders a grid of individual images by mapping over the images array prop.

## Current status: What should future me know about where this project left off?
This project is finished.