import React from "react";

function QuestionItem({ question, setQuestions, questions }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(event) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        // event.target.parentNode.remove()
        const updatedList = questions.filter(q => q.id !== id)
        setQuestions(updatedList)
      })

      
    
  }

  function handleChange(event) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({"correctIndex": Number(event.target.value)})
    })
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
