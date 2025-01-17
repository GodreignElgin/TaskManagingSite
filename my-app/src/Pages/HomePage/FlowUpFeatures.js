import React from 'react';
import '../../Styles/HomePage/FlowUpFeatures.css';

const FlowUpFeatures = () => {
  return (
    <div className="homepage">
      {/* Top Section with three features */}
      <div className="features">
        <div className="feature-item">
          <img src="https://cdn-icons-png.flaticon.com/512/5246/5246283.png" alt="Take control" />
          <h3>Take control of it</h3>
          <p>Create your own homepage by dragging and dropping personalized widgets.</p>
        </div>
        <div className="feature-item">
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-task-management-1605662-1361013.png" alt="Reduce time on tasks" />
          <h3>Reduce the time spent on tasks</h3>
          <p>Access the projects, tasks, and formats that are most important to you first.</p>
        </div>
        <div className="feature-item">
          <img src="https://icon-library.com/images/project-icon-png/project-icon-png-16.jpg" alt="Keeping motivated" />
          <h3>Keeping yourself motivated is key</h3>
          <p>Keep a record of the number of jobs you finish each week or month.</p>
        </div>
      </div>

      {/* Main Section */}
      <div className="main-section">
        <div className="image-section">
          <img src="https://cdn.dribbble.com/users/4241563/screenshots/11874468/media/7796309c77cf752615a3f9062e6a3b3d.gif" alt="Team Meeting" />
        </div>
        <div className="text-section">
          <h2>Collaborate more effectively</h2>
          <p>
            <h1>
            Regardless of how far apart they are, get your teams to collaborate more. Use Whiteboards to generate ideas,
            collaborate Docs to write plans, and centralized project-related communications in one location.</h1>
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default FlowUpFeatures;
