# **Geppetto**

*A website that utilizes the DaVinci 2 AI to let you wish upon a star.*

![geppetto logo, an image of pinocchio staring up at geppetto](https://i.imgur.com/tzGCXcl.png)


## What is Geppetto?  

Geppetto is a Fullstack MERN application that utilizes the DaVinci 2 text completion AI from OpenAI to allow users to create custom AI models, or 'puppets'.

Pleaset note: 

AI is a powerful tool with boundless potential, as such it is important that we use it responsibly and with humanity.

Users with any concerns, please feel free to email me at pfulcher26@gmail.com 

## What is DaVinci 2?

DaVinci 2 is an AI model developed by OpenAI that focuses on understanding and generating text.  The model can do everything from content generation and summarization to sentiment analysis.  For more information on OpenAI and the text-completion features used in this project, please visit OpenAI's website:

<a  href="https://beta.openai.com/"  target="_blank">OpenAI API</a>

## How does Geppetto use DaVinci 2?

Geppetto makes use of the text-completion endpoint of the DaVinci 2 AI.  Below is an example API request made in Node.js using the text-completion endpoint: 

![an example of a DaVinci 2 api request using the text-completion endpoint](https://i.imgur.com/m5nzs53.png)

The prompt is given to the AI model to generate text, along with a temperature that indicates how closely the model will adhere to the prompt instructions. 

## DaVinci 2 with React/MERN stack

The functionality of Geppetto hinges on accepting custom user inputs that are then set as state and provided as a payload within the restful API request, so that they can then be interpolated into a prompt generator function that is passed to the OpenAI API call as the prompt attribute, which the AI uses to generate custom text completions. 

What does that mean? 

Let's break it down:

Users provide input corresponding to different attributes of their custom model.  

![UI for the user input](https://i.imgur.com/eKwra8s.png)

The input is captured in state and then passed to a function called from the puppets API.

![react function that captures the state and calls api middleware](https://i.imgur.com/Quuf7GO.png)

The API acts as middleware, sending an AJAX request to the backend. 

![api request to backend](https://i.imgur.com/dJyM5ff.png)

The /create route is pinged and the corresponding function called from the controller. 

![the create route within the routes module](https://i.imgur.com/F7TPwsX.png)

The create function calls the OpenAI API, passing a custom prompt generated using the generatePrompt function.  

![OpenAI's API is called with custom prompt](https://i.imgur.com/kEJoMvh.png)

The generatePrompt function takes the payload, containing the state of the model the user is creating, and returns a custom prompt by interpolating the user input.  The custom prompt is included in the OpenAI API call and the reponse is parsed from json and returned to the front-end where it is used to update the state and display the completion on the UI. 

![the generate prompt function that interpolates the payload from the front-end](https://i.imgur.com/3FaqQh2.png)

An example of a completed prompt: 

![An example of a completed prompt](https://i.imgur.com/WI63OJK.png)

![An example text-completion](https://i.imgur.com/8Ccv7VF.png)

Users can then save prompts and have them appear in a Prototypes component. 

![UI for prototypes component](https://i.imgur.com/uubJIia.png)

And that's it! 

## Design 

Geppetto was designed using raw CSS with the exception of Bootstrap to make the navbar responsive.  Mediaqueries were added for small screen devices.  

Here is a link to the project's <a  href="https://whimsical.com/gepetto-FRkCLFx9oahpjUKvNBzssa"  target="_blank">Whimsical</a>.


Below are a few selections comparing the planned UI to the final draft:


All illustrations are by <a  href="https://en.wikipedia.org/wiki/Carlo_Chiostri"  target="_blank">Chiostri frenzi</a>, an Italian illustrator from the late 1900's. 

![Title page from the 1902 edition of Pinocchio](https://i.imgur.com/EErh0j4.png)





