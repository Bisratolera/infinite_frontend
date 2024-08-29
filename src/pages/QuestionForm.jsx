import React, { useState } from 'react';

const QuestionForm = () => {
    const [question, setQuestion] = useState('');
    const [questionType, setQuestionType] = useState('multiple-choice');
    const [options, setOptions] = useState(['']);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [savedQuestions, setSavedQuestions] = useState([]);
    const [isExamSubmitted, setIsExamSubmitted] = useState(false);
    const [studentAnswers, setStudentAnswers] = useState([]);
    const [score, setScore] = useState(0);

    const handleAddOption = () => {
        setOptions([...options, '']);
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleCorrectAnswerChange = (index) => {
        setCorrectAnswer(index);
    };

    const handleSaveQuestion = () => {
        const newQuestion = {
            question,
            questionType,
            options,
            correctAnswer
        };

        setSavedQuestions([...savedQuestions, newQuestion]);

        // Reset form after saving
        setQuestion('');
        setQuestionType('multiple-choice');
        setOptions(['']);
        setCorrectAnswer(null);
    };

    const handleSubmitExam = () => {
        let newScore = 0;
        savedQuestions.forEach((question, index) => {
            if (question.questionType === 'multiple-choice' && studentAnswers[index] === question.correctAnswer) {
                newScore += 1;
            } else if (question.questionType === 'true-false' && studentAnswers[index] === question.correctAnswer) {
                newScore += 1;
            }
        });
        setScore(newScore);
        setIsExamSubmitted(true);
    };

    const handleAnswerChange = (index, answer) => {
        const newAnswers = [...studentAnswers];
        newAnswers[index] = answer;
        setStudentAnswers(newAnswers);
    };

    return (
        <div className="flex flex-col p-8 space-y-8">
            <section className='flex gap-5'>
                {/* Left Panel */}
                <div className="w-[50%] bg-gray-800 p-6 text-white rounded-lg">
                    <div>
                        <label className="block text-sm font-medium mb-2">Question Title</label>
                        <textarea
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            className="w-full p-2 bg-gray-700 rounded"
                            placeholder="Enter your question..."
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium mb-2">Question Type</label>
                        <select
                            value={questionType}
                            onChange={(e) => setQuestionType(e.target.value)}
                            className="w-full p-2 bg-gray-700 rounded"
                        >
                            <option value="multiple-choice">Multiple Choice</option>
                            <option value="true-false">True/False</option>
                            <option value="short-answer">Short Answer</option>
                        </select>
                    </div>

                    {questionType === 'multiple-choice' && (
                        <div className="mt-4">
                            <label className="block text-sm font-medium mb-2">Options</label>
                            {options.map((option, index) => (
                                <div key={index} className="flex items-center space-x-2 mb-2">
                                    <input
                                        type="text"
                                        value={option}
                                        onChange={(e) => handleOptionChange(index, e.target.value)}
                                        className="flex-1 p-2 bg-gray-700 rounded"
                                        placeholder={`Option ${index + 1}`}
                                    />
                                    <input
                                        type="checkbox"
                                        checked={correctAnswer === index}
                                        onChange={() => handleCorrectAnswerChange(index)}
                                        className="w-5 h-5"
                                    />
                                </div>
                            ))}
                            <button
                                onClick={handleAddOption}
                                className="mt-2 text-sm bg-blue-500 text-white py-1 px-2 rounded"
                            >
                                Add Option
                            </button>
                        </div>
                    )}

                    {questionType === 'true-false' && (
                        <div className="mt-4">
                            <label className="block text-sm font-medium mb-2">Select Answer</label>
                            <div className="flex items-center space-x-4">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="true-false"
                                        checked={correctAnswer === 'true'}
                                        onChange={() => setCorrectAnswer('true')}
                                        className="w-5 h-5"
                                    />
                                    <span>True</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="true-false"
                                        checked={correctAnswer === 'false'}
                                        onChange={() => setCorrectAnswer('false')}
                                        className="w-5 h-5"
                                    />
                                    <span>False</span>
                                </label>
                            </div>
                        </div>
                    )}

                    <button
                        onClick={handleSaveQuestion}
                        className="mt-6 bg-green-500 text-white py-2 px-4 rounded"
                    >
                        Save Question
                    </button>
                </div>

                {/* Preview question  */}
                <div className="w-2/3 bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Question Preview</h2>
                    <div className="text-lg mb-4">{question}</div>

                    {questionType === 'multiple-choice' && (
                        <div>
                            {options.map((option, index) => (
                                <label key={index} className="flex items-center space-x-2 mb-2">
                                    <input
                                        type="checkbox"
                                        disabled
                                        checked={correctAnswer === index}
                                        className="w-5 h-5"
                                    />
                                    <span>{option}</span>
                                </label>
                            ))}
                        </div>
                    )}

                    {questionType === 'true-false' && (
                        <div>
                            <label className="flex items-center space-x-2 mb-2">
                                <input
                                    type="radio"
                                    name="preview-true-false"
                                    disabled
                                    checked={correctAnswer === 'true'}
                                    className="w-5 h-5"
                                />
                                <span>True</span>
                            </label>
                            <label className="flex items-center space-x-2 mb-2">
                                <input
                                    type="radio"
                                    name="preview-true-false"
                                    disabled
                                    checked={correctAnswer === 'false'}
                                    className="w-5 h-5"
                                />
                                <span>False</span>
                            </label>
                        </div>
                    )}
                </div>
            </section>

            {/* Right Panel */}
            <div className="w-full bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Exam</h2>
                {isExamSubmitted ? (
                    <div>
                        {savedQuestions.map((question, index) => (
                            <div key={index} className="mb-6 p-4 rounded-lg border" style={{ backgroundColor: studentAnswers[index] === question.correctAnswer ? '#e6ffed' : '#ffe6e6', borderColor: studentAnswers[index] === question.correctAnswer ? '#34d399' : '#f87171' }}>
                                <h3 className="text-lg font-semibold mb-2">{`Question ${index + 1}: ${question.question}`}</h3>
                                {question.questionType === 'multiple-choice' && (
                                    <div>
                                        {question.options.map((option, i) => (
                                            <label key={i} className={`flex items-center space-x-2 mb-2 ${studentAnswers[index] === i && studentAnswers[index] === question.correctAnswer ? 'text-green-600' : studentAnswers[index] === i ? 'text-red-600' : ''}`}>
                                                <input
                                                    type="radio"
                                                    name={`question-${index}`}
                                                    value={i}
                                                    checked={studentAnswers[index] === i}
                                                    readOnly
                                                    className="w-5 h-5"
                                                />
                                                <span>{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                                {question.questionType === 'true-false' && (
                                    <div>
                                        <label className={`flex items-center space-x-2 mb-2 ${studentAnswers[index] === 'true' && studentAnswers[index] === question.correctAnswer ? 'text-green-600' : studentAnswers[index] === 'true' ? 'text-red-600' : ''}`}>
                                            <input
                                                type="radio"
                                                name={`question-${index}`}
                                                value="true"
                                                checked={studentAnswers[index] === 'true'}
                                                readOnly
                                                className="w-5 h-5"
                                            />
                                            <span>True</span>
                                        </label>
                                        <label className={`flex items-center space-x-2 mb-2 ${studentAnswers[index] === 'false' && studentAnswers[index] === question.correctAnswer ? 'text-green-600' : studentAnswers[index] === 'false' ? 'text-red-600' : ''}`}>
                                            <input
                                                type="radio"
                                                name={`question-${index}`}
                                                value="false"
                                                checked={studentAnswers[index] === 'false'}
                                                readOnly
                                                className="w-5 h-5"
                                            />
                                            <span>False</span>
                                        </label>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="text-lg font-semibold">
                            <p>Your Score: {score} out of {savedQuestions.length}</p>
                        </div>
                    </div>
                ) : (
                    <div>
                        {savedQuestions.map((question, index) => (
                            <div key={index} className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">{`Question ${index + 1}: ${question.question}`}</h3>
                                {question.questionType === 'multiple-choice' && (
                                    <div>
                                        {question.options.map((option, i) => (
                                            <label key={i} className="flex items-center space-x-2 mb-2">
                                                <input
                                                    type="radio"
                                                    name={`question-${index}`}
                                                    value={i}
                                                    onChange={(e) => handleAnswerChange(index, parseInt(e.target.value))}
                                                    className="w-5 h-5"
                                                />
                                                <span>{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                                {question.questionType === 'true-false' && (
                                    <div>
                                        <label className="flex items-center space-x-2 mb-2">
                                            <input
                                                type="radio"
                                                name={`question-${index}`}
                                                value="true"
                                                onChange={(e) => handleAnswerChange(index, e.target.value)}
                                                className="w-5 h-5"
                                            />
                                            <span>True</span>
                                        </label>
                                        <label className="flex items-center space-x-2 mb-2">
                                            <input
                                                type="radio"
                                                name={`question-${index}`}
                                                value="false"
                                                onChange={(e) => handleAnswerChange(index, e.target.value)}
                                                className="w-5 h-5"
                                            />
                                            <span>False</span>
                                        </label>
                                    </div>
                                )}
                            </div>
                        ))}
                        <button
                            onClick={handleSubmitExam}
                            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded"
                        >
                            Submit Exam
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuestionForm;
