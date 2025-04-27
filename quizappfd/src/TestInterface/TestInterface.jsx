import React, { useState } from 'react';
import './TestInterface.css';
import { useNavigate } from 'react-router-dom';


const testData = {
  title: 'GATE Mock Test',
  sections: [
    {
      name: 'Section 1 - MCQ',
      questions: [
        {
          id: 1,
          type: 'MCQ',
          question: 'Which protocol is used to send email?',
          options: ['HTTP', 'SMTP', 'FTP', 'SNMP'],
          answer: 1,
        },
      ],
    },
    {
      name: 'Section 2 - NAT',
      questions: [
        {
          id: 2,
          type: 'NAT',
          question: 'Enter the output of 25 * 4:',
          answer: '100',
        },
      ],
    },
  ],
};

const MockTestInterface = () => {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission of answers
    console.log('Submitted Answers:', answers);
    alert('Test submitted successfully!');
    navigate('/report'); // Redirect to results page after submission
  }

  const handleMCQ = (qId, optionIndex) => {
    setAnswers({ ...answers, [qId]: optionIndex });
  };

  const handleNAT = (qId, value) => {
    setAnswers({ ...answers, [qId]: value });
  };

  return (
    <form className="mocktest-container" onSubmit={handleSubmit}>
      <div className="question-ledger">
        {testData.sections.flatMap((s) => s.questions).map((q, idx) => (
          <div key={q.id} className={`ledger-item ${answers[q.id] ? 'answered' : ''}`}>
            {idx + 1}
          </div>
        ))}
      </div>
      <div className="question-area">
        <h2>{testData.title}</h2>
        {testData.sections.map((section, i) => (
          <div key={i} className="section">
            <h3>{section.name}</h3>
            {section.questions.map((q, idx) => (
              <div key={q.id} className="question-block">
                <p><strong>Q{idx + 1}:</strong> {q.question}</p>
                {q.type === 'MCQ' ? (
                  <div className="options">
                    {q.options.map((opt, index) => (
                      <label key={index}>
                        <input
                          type="radio"
                          name={`q-${q.id}`}
                          value={index}
                          checked={answers[q.id] === index}
                          onChange={() => handleMCQ(q.id, index)}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                ) : (
                  <input
                    type="text"
                    className="nat-input"
                    placeholder="Enter number"
                    value={answers[q.id] || ''}
                    onChange={(e) => handleNAT(q.id, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default MockTestInterface;
