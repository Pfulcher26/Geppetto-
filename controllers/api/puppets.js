const { Configuration, OpenAIApi } = require('openai');
const Puppet = require('../../models/puppet');

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
  console.log(req.body)
}

function generatePrompt(puppet) {
  return `Your name is ${puppet.name}.  You want ${puppet.dream}.  You are ${puppet.personality}.  Tell me your name and a long, crazy story about yourself.`;
}

function save(req, res){
  req.body.puppetInput.user = req.user._id;
  const puppet = new Puppet(req.body.puppetInput);
  puppet.save(function(err) {
      if (err) return res.redirect('/workshop');
      res.redirect('/workshop');
  });
}

async function index(req, res) {
  const items = await Puppet.find({user: req.user._id}).sort('name');
  res.json(items);
}

function deletePuppet(req, res) {
  let id = req.body.item._id;
  Puppet.findByIdAndDelete(id, function (err) {
    if (err){
        console.log(err)
    }
    else{
        console.log("it worked");
    }
});
}

module.exports = {
    create, 
    save,
    index,
    deletePuppet
};
