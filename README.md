# Applifting (Not That) Mighty Blog App

## Assignment Description

**https://github.com/Applifting/fullstack-exercise/blob/master/assignment.md**

## Stack

* React (+ webpack and other funcionality under the hood - using create-react-app script)
* Redux - only because of the challenge specification, React Context API would really be sufficient, Redux is unnecessary
* DaisyUI + TailwindCSS for basic UI purposes without the need for any huge styling

## Structure

* File structure of the app is pretty straightforward.
    * Services folder - API handling
    * Routes folder - everything regarding routing
    * Pages folder - top-level components that are rendered on separate pages (used for routing)
    * Layouts folder - components used as page / app layout, such as top menu, page and content wraper etc.
    * Components folder - all other components excluding Page components used in the app. Each folder inside the components folder belong to a single Page component. Global components used on more pages are saved separately.

## Problems and reasoning

* I'll try to group the problems and the solution reasoning by separate pages starting with the most important ones

### Article vs. Article Detail schema

On more than one page (at least Recent Articles and My Articles) I've ran into problem with first fetching all articles from one endpoint and then fetching each article detail separately just to show the fields' values in the list. One of the solutions would be to save all articles into Redux store e.g. on the start of the app. This would minimize the number of requests for articles' details - fetch each article once, not on every page render. It would NOT solve our problem - e.g. scaling would be a problem. It doesn't make sense to save huge number of articles into some store just to have the data. Best solution seems redesigning the API to provide more data on the `/articles` endpoint. I decided rather not to show some of the article details that are not present at the `/articles` endpoint (Recent Articles).

### Authentication

Whole authentication in the app is implemented only using the app state. No authentication stated is saved neither in the cookies nor in local storage. To the best of my conscience, that's the best solution without implementing my own authentication BE. Saving the access token to the Local Storage, it's vulnerable to XSS. Saving it to cookies WITHOUT HttpOnly flag is the same. I would add the BE functionality to save refresh token to cookies WITH the HttpOnly flag set and save the access token only to memory, just like implemented here.

### Whole images functionality

I haven't implemented the uploading / fetching / editing image functionality in the whole app. Everything is ready for it, I've highlighted some of the functionality using comments directly in the components' source files, but I don't really have time to play with the image API endpoint and adding the upload image feature. I believe I've already proved it would not be a problem for me. Image functionality is not described in the FE Challenge description and I simply don't have time for it, sorry.

#### Proposed image implementation

I would add "Upload image" button to the Create Article form. In the publishing process, the image would be first uploaded and the `imageId` from the response of the POST API call would be then used in the article details and the POST API call to create an article would happen just after saving this imageId. That way, I could save imageId of a newly uploaded image to an article in one button click (2 api calls).

When fetching the article details, once again I would use 2 api calls. First, fetch the article details including the imageId field and then fetch the image. Just after both this call, show the article details (loader up to this moment).

### Recent Articles

* No number of comments on the main page, no author - API doesn't provide this functionality. More on this above.

### Article Detail

* Related articles - used in the Figma designs, not even mentioned in the API. Would be cool to have some kind of magic to recognize related articles and provide it in the `articles/{id}` endpoint :) I created a static component for related articles, but they show just Lorem Ipsum. Maybe I could have provided random articles based on their IDs, anyway... :)

### Loaders, About Page, Not Found Page

* Loaders - there are no implemented loaders in the whole app. Usually the 'loader states' are marked with a comment
* About, Not Found pages - without any styling, they exist just to have the pages :D

## Other ideas and improvements

### Query library

* I think it'd be beneficial to use a query library like *React Query* or something similar to handle different types of API errors and/or loading states. The reason why I haven't used said library is the small complexity of the application. If the app should scale beyond the described purposes, *React Query* would definitely be the way I go for error / loading handling.

## Code documentation

* The source code is not really commented. I believe the code itself is self-explanatory enough and only small parts of the code is described using comments.

## Testing

* No tests provided. I know a bit of Cypress and a bit of Jest testing processes, but honestly I've never used neither of them in production app. I believe that I could write some meaningful tests with a little bit of time, but since I genuinely wanna show my current skills, I decided not to provide them for now.
* Whole app is tested only by hand and manual usage.

## TODOs

* There are some left TODOs in the code comments - those are left on purpose, are described here in README and are left in case I'd like to play with the app some day in the future.
