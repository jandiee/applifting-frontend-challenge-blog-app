# Mighty Applifting Blog App

## Stack

* React (+ webpack and other funcionality under the hood - using create-react-app script)
* Redux - only because of the challenge specification, React Context API would be sufficient
* DaisyUI + TailwindCSS for basic UI purposes without the need for any huge styling

## Problems and reasoning

* I'll try to group the problems and the solution reasoning by separate pages starting with the most important ones

### Article vs. Article Detail schema

On more than one page (at least Recent Articles and My Articles) I've ran into problem with first fetching all articles from one endpoint and then fetching each article detail separately just to show the fields' values in the list. One of the solutions would be to save all articles into Redux store e.g. on the start of the app. This would minimize the number of requests for articles' details - fetch each article once, not on every page render. It would NOT solve our problem - e.g. scaling would be a problem. It doesn't make sense to save huge number of articles into some store just to have the data. Best solution seems redesigning the API to provide more data on the `/articles` endpoint.

### Authentication

Whole authentication in the app is implemented only using the app state. No authentication stated is saved neither in the cookies nor in local storage. To the best of my conscience, that's the best solution without implementing my own authentication BE. Saving the access token to the Local Storage, it's vulnerable to XSS. Saving it to cookies WITHOUT HttpOnly flag is the same. I would add the BE functionality to save refresh token to cookies WITH the HttpOnly flag set and save the access token only to memory, just like implemented here.

### Whole images functionality

I haven't implemented the uploading / fetching / editing image functionality in the whole app. Everything is ready for it, I've highlighted some of the functionality using comments directly in the components' source files, but I don't really have time to play with the image API endpoint and adding the upload image feature. I believe I've already proved it would not be a problem for me. Image functionality is not described in the FE Challenge description and I simply don't have time for it, sorry.

### Recent Articles

* No number of comments on the main page, no author - API doesn't provide this functionality. More on this above.

### Article Detail

* Related articles - used in the Figma designs, not even mentioned in the API. Would be cool to have some kind of magic to recognize related articles and provide it in the `articles/{id}` endpoint :) I created a static component for related articles, but they show just Lorem Ipsum. Maybe I could have provided random articles based on their IDs, anyway... :)

### Loaders, About Page, Not Found Page

* Loaders - there are no implemented loaders in the whole app. Usually the 'loader states' are marked with a comment
* About, Not Found pages - without any styling, they exist just to have the pages :D
