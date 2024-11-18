# js-xmlHttpRequest

Using JavaScripts's built in `XMLHttpRequest()` class, the aim of this project is to get uncomfortable and walk through callback hell to get a firsthand understanding of the importance of promises and `async await`.

This project is divided into 2 sections: the **Practice Folder**, and the **Root Project**.

## Practice Folder

An area for learning and experimenting. This is where I play around and incrementally get comfortable using XMLHttpRequests.

## Root Project

The root project simulates an example of callback hell by nesting multiple asynchronous requests.
The sequence of operations is as follows:

- Using the [Meowfacts API](https://github.com/wh-iterabb-it/meowfacts), we asynchronously request a new random cat fact
  - Using the [Cataas API](https://cataas.com/), we asynchronously request a random cat image/gif   
    - A word from the cat fact is used to asynchronously get an object id from the [MET's API](https://metmuseum.github.io/)
      - That object id is used to asynchronously get info on said object (title, image, object name, artist name, date)
        - The HTML is rendered in a synchronous callback function
      - Error handling for met info request
  - Error handling for cat image request
- Error handling for random cat fact request

## Reflection

By implementing this project, I learned that callback hell lies in: 
  
**Redundancies:**  Needing to create callbacks within callbacks to pass them as arguments instead of using a cleaner `.then()` method or modern `async/await`  
**Complex Context Tracking:** Constantly keeping track of what argument was passed where and how it was used in subsequent callbacks can be mentally taxing   
**Nested Error Handling:** Having to create separate callback layers specifically for error handling increases clutter   
**Reduced Readability:** The difficulty it would pose for someone new to the codebase to try to decipher all of the layers   
**Reduced Maintainability:** The nesting makes it difficult to modify just one part of the code without it affecting the rest  

## Acknowledgments

List of Open Source APIs used:

Meowfacts  
https://github.com/wh-iterabb-it/meowfacts

Cataas   
https://cataas.com/

The Metropolitan Museum of Art Collection API  
https://metmuseum.github.io/

A big Thank You to Meowfacts, Cataas and Metmuseum for creating and maintaining these resources
