//Sets up api configuration 
const { Configuration, OpenAIApi } = require('openai');
const Puppet = require('../../models/puppet');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

//calls the API using the generatePrompt function to pass the prompt, ie what the AI will use to generate its story
async function create(req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.puppetInput),
    temperature: 0.6,
    max_tokens: 360,
    user: req.user._id
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

//Takes values passed down via the req.body.puppetInput and interpolates them into the prompt string that is fed to the prompt when API is called above
function generatePrompt(puppet) {
  return `Your name is ${puppet.name}.  You want ${puppet.dream}.  You are ${puppet.personality}.  Tell me your name and a long, crazy story about yourself.`;
}

//Takes the payload in the form of req.body.puppetInput and creates a new instance of the Puppet model and saves it to mongoose 
function save(req, res){
  req.body.puppetInput.user = req.user._id;
  const puppet = new Puppet(req.body.puppetInput);
  puppet.save(function(err) {
      if (err) return res.redirect('/workshop');
      res.redirect('/workshop');
  });
}

//Finds all entries in the database belonging to the Puppet collection by the user id stored in req.user, then sorts them by name and returns them as json
async function index(req, res) {
  const items = await Puppet.find({user: req.user._id}).sort('name');
  res.json(items);
}

//Finds the entry in the mongoose Puppet collection that matches the id of the item being deleted, then calls the findByIdAndDelete mongoose method to delete it 
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

//exports all modules to be used by routes 
module.exports = {
    create, 
    save,
    index,
    deletePuppet
};
