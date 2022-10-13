# **Geppetto**

*A website that utilizes the DaVinci 2 AI to let you wish upon a star.*

![geppetto logo, an image of pinocchio staring up at geppetto](https://i.imgur.com/tzGCXcl.png)


## What is Geppetto?  

Geppetto is a Fullstack MERN application that utilizes the DaVinci 2 text generation AI from OpenAI to allow users to create custom 'puppets'.

Pleaset note: 

AI is a powerful tool with boundless potential, as such it is important that we use it responsibly and with humanity.

Users with any concerns, please feel free to email me at pfulcher26@gmail.com 

## What is DaVinci 2?

DaVinci 2 is an AI model developed by OpenAI that focuses on understanding and generating text.  The model can do everything from content generation and summaraization to sentiment analysis.  For more information on OpenAI and the text-completion features used in this project, please visit OpenAI's website:

<a  href="https://beta.openai.com/"  target="_blank">OpenAI API</a>

## How does Geppetto use DaVinci 2?

Geppetto makes use the text-completion endpoint of the DaVinci 2 AI.  Below is an example request in Node.js using the text-completion endpoint: 

![an example of a DaVinci 2 api request using the text-completion endpoint](https://i.imgur.com/m5nzs53.png)

The prompt is given to the AI model to generate text, along with a temperature that indicates how closely the model will adhere to the prompt instructions. 

## DaVinci 2 with React 

The functionality of Geppetto hinges on accepting custom user inputs that are then set as state and provides as a payload within the restful API request, so that they can then be interpolated into a prompt generator function that is passed to the OpenAI API call as the prompt attribute. 

Let's break it down:




