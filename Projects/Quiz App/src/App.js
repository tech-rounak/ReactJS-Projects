import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
  const [currentQuestion,setCurrentQuestion] = useState(0);
  const[answer,setAnswer]=useState(0);
  const[answeredAll,setAnsweredAll]=useState(false);
  const[check,setCheck]=useState('');
  const increaseQuestionHandler=(val)=>{
    if(currentQuestion+1 === questions.length){
      setAnsweredAll(true);
    }
    if(val.isCorrect){
      setAnswer(answer+1);
       setCheck('correct');
    }
    else {
      setCheck('incorrect');
    }
    setCurrentQuestion(currentQuestion+1);
  }

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{answeredAll ? (
				<div className='score-section'>You scored {answer} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion+1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{
              questions[currentQuestion].answerOptions.map(val=>(
                <button key={val.answerText}  onClick={()=>increaseQuestionHandler(val)}>{val.answerText}</button>
              ))
            }
					</div>
				</>
			)}
		</div>
	);
}