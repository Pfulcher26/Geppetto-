const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function create(req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.puppetInput),
    temperature: 0.6,
    max_tokens: 360,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(puppet) {
  return `Your name is ${puppet.name}.  You want ${puppet.dream}.  You are ${puppet.personality}.  Tell me your name and a long, crazy story about yourself.`;
}

module.exports = {
    create, 
};
