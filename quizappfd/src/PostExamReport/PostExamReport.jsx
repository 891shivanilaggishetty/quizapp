import React from 'react';
import './PostExamReport.css';

const PostExamReport = ({ user, courseName, testName, score, percentage, rank, solutions }) => {
  const handleSendEmail = () => {
    const emailBody = `Dear ${user.name},\n\nYour test has been successfully submitted.\nCourse Name: ${courseName}\nTest Name: ${testName}\n\nBest Regards,\nnDMatrix`;
    console.log('Email Sent To:', user.email);
    console.log('Email Body:', emailBody);
    // In real implementation, call backend/email service here
  };

  return (
    <div className="report-container">
      <div className="summary">
        <h2>Performance Summary</h2>
        <p><strong>Score:</strong> {score}</p>
        <p><strong>Percentage:</strong> {percentage}%</p>
        <p><strong>Rank:</strong> {rank}</p>
      </div>

      <div className="solutions">
        <h2>Detailed Solutions</h2>
        {solutions?.lenght>0 ? <>
          {solutions?.map((q, i)  => (
          <div key={i} className="solution-block">
            <p><strong>Q{i + 1}:</strong> {q.question}</p>
            <p><span className="label">Correct Answer:</span> {q.correctAnswer}</p>
            <p><span className="label">Your Answer:</span> {q.userAnswer ?? 'Not Attempted'}</p>
          </div>
        ))}
        </>:null}
      </div>

      <button className="email-btn" onClick={handleSendEmail}>
        Send Confirmation Email
      </button>
    </div>
  );
};

export default PostExamReport;
