import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({ questions, setQuestions }) {
  const allQuestions = questions.map((question) => <QuestionItem key={question.id} question={question} setQuestions={setQuestions} questions={questions}/>)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{allQuestions}</ul>
    </section>
  );
}

export default QuestionList;
