import React, { useState } from 'react';
import './UserDashboard.css';

const UserDashboard = ({ profilePic }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h3>Dashboard</h3>
        <ul>
          <li>My Courses</li>
          <li>Results</li>
        </ul>
      </div>

      <div className="dashboard-main">
        <div className="topbar">
          <div
            className="profile-section"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <img src={profilePic} alt="Profile" className="profile-pic" />
            {showDropdown && (
              <div className="dropdown-menu">
                <div>My Profile</div>
                <div>Change Password</div>
                <div>Logout</div>
              </div>
            )}
          </div>
        </div>
        <div className="content">
          <h2>Welcome to your Dashboard!</h2>
          {/* You can render subpages like courses/results here */}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
