import React from 'react';
import { Configuration, OpenAIApi } from 'openai';
import Translation from '../components/TranslationAI';
import { useState } from 'react';

function Artificial() {

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
  const openai = new OpenAIApi(configuration);

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const generateRecipe = async () => {
      const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Please create a full recipe with ingredients and instructions of this object:"+input +"Write the recipe as an HTML code.",
      temperature: 0,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
        });
    setResult(response.data.choices[0].text);  
  }


  return (
    <Translation generateRecipe={generateRecipe} setInput={setInput} result={result}/>
  )
}

export default Artificial;