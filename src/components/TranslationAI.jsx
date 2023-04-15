import React from 'react'
import styled from 'styled-components'

function Translation({generateRecipe, setInput, result}) {
  return (
    <AICSS>
      <div className='translationDiv'>
        <img src="ai.png" width="300px" alt="/"></img>
        <h3>Create a recipe using Artificial Intelligence</h3>
          <input
            type="text"
            placeholder='Enter your desired meal'
            onChange={(e) => setInput(e.target.value)}
            />
          <input type='submit' value='Generate a recipe' onClick={generateRecipe}/>
      </div>
      <div className='result-text' dangerouslySetInnerHTML={{__html: result}}></div>
    </AICSS>
  )
}

const AICSS = styled.div`
  .translationDiv{
    display:flex;
    flex-direction: column;
    align-items: center;
  }
  input[type="text"] {
  padding: 12px 16px;
  border: 1px solid #313131;
  border-radius: 4px;
  margin-bottom: 24px;
  outline-color: #212121;
  text-align: center;
  width:300px;
  }
  input[type="submit"] {
  padding: 12px 0;
  color: #fff;
  background-color: #313131;
  border: none;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  width:200px;
}

.result-text{
  display:grid;
  grid-template-columns: auto auto;

}
.result-text ul, ol{
  margin:3rem;
}

.result-text h1{
  margin-bottom: 2rem;
  grid-column-start: 1;
  grid-column-end: 3;

}
h3{
    font-size:1.5rem;
    color:rgb(56,56,56);
    line-height: 2.5rem;
    margin:2rem 0rem;
    }

`

export default Translation;