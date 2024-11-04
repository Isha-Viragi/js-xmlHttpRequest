# js-xmlHttpRequest

Using Javascripts's built in class xmlHttpRequest(), the aim of this project is to get uncomfortable and walk through callback hell to get a first hand understanding of the importance of promises and async await

Open source APIs used:

meowfacts
https://github.com/wh-iterabb-it/meowfacts

The Metroppolitan Museum of Art Collection API
https://metmuseum.github.io/


This project has a practice/ folder-
This is where I play around and incrementally get comfortable using xmlHttpRequests

The root of this project-
This project is set up in a way that enables callback nesting (to go through callback hell).
Here is how the nesting is structured:

-> Using meowfacts's api, we asynchronously get a new random cat fact on load
  -> A word from that fact is used to asynchronously get an object id from the MET's api
    -> That object id is used to asynchronously get info on said object (title, image, object name, artist name, location)
      -> The html for the met object information is rendered in a synchronus callback function
      

A big Thank you to them for creating and maintaining these free resources
