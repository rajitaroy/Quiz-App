import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: '____ JavaScript is also called client-side JavaScript.',
			answerOptions: [
				{ answerText: 'Microsoft', isCorrect: false },
				{ answerText: 'Navigator', isCorrect: true },
				{ answerText: 'LiveWire', isCorrect: false },
				{ answerText: 'Native', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is a web server?',
			answerOptions: [
				{ answerText: 'Eclipse', isCorrect: false },
				{ answerText: 'Apache tomcat', isCorrect: true },
				{ answerText: 'Netbeans', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
		{
			questionText: 'PHP is an example of ______ scripting language.',
			answerOptions: [
				{ answerText: 'Server-side', isCorrect: true },
				{ answerText: 'Client-side', isCorrect: false },
				{ answerText: 'Browser-side', isCorrect: false },
				{ answerText: 'In-side', isCorrect: false },
			],
		},
		{
			questionText: 'Inside which HTML element do we put the JavaScript?',
			answerOptions: [
				{ answerText: '<js>', isCorrect: false },
				{ answerText: '<scripting>', isCorrect: false },
				{ answerText: '<script>', isCorrect: true },
				{ answerText: '<javascript>', isCorrect: false },
			],
		},
		{
			questionText: 'HTTP is a _________ Protocol.',
			answerOptions: [
				{ answerText: 'stateless', isCorrect: true },
				{ answerText: 'stateful', isCorrect: false },
				{ answerText: 'No State', isCorrect: false },
				{ answerText: 'All state', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
