# js-xmlHttpRequest

Using Javascripts's built in class `xmlHttpRequest()`, the aim of this project is to get uncomfortable and walk through callback hell to get a first hand understanding of the importance of promises and async await

This project has 2 sections: the practice folder, and the root files

## Practice Folder

This is where I play around and incrementally get comfortable using xmlHttpRequests

## Root Project

This project is set up in a way that enables callback nesting (to simulate callback hell).
This is how the nesting is structured:

- Using meowfacts's api, we asynchronously get a new random cat fact on load
  - A word from that fact is used to asynchronously get an object id from the MET's api
    - That object id is used to asynchronously get info on said object (title, image, object name, artist name)
      - The html for the met object information is rendered in a synchronus callback function

## Aknowledgements

List of Open Source APIs used:

meowfacts  
https://github.com/wh-iterabb-it/meowfacts

The Metroppolitan Museum of Art Collection API  
https://metmuseum.github.io/

A big Thank you to meowfacts and metmuseum for creating and maintaining these resources
