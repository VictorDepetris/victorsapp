import React, { useState } from 'react';
import './App.css';

// Sample data for projects
const projectsData = [
  {
    id: 1,
    name: 'Project Name 1',
    users: ['user1', 'user2', 'user3'],
    hwSet1: 50,
    hwSet2: 0,
  },
  {
    id: 2,
    name: 'Project Name 2',
    users: ['user4', 'user5'],
    hwSet1: 0,
    hwSet2: 0,
  },
  {
    id: 3,
    name: 'Project Name 3',
    users: [],
    hwSet1: 10,
    hwSet2: 20,
  },
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>Projects Dashboard</h1>
      </header>
      <Projects />
    </div>
  );
}

// Projects Component
function Projects() {
  return (
    <div className="projects">
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

// ProjectCard Component
function ProjectCard({ project }) {
  const [isMember, setIsMember] = useState(false);

  // Function to handle join/leave action
  const handleJoinLeave = () => {
    setIsMember(!isMember);
  };

  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>Authorized Users: {project.users.join(', ') || 'None'}</p>
      <p>HWSet1: {project.hwSet1}/100</p>
      <p>HWSet2: {project.hwSet2}/100</p>
      <button onClick={() => alert('Enter Quantity')} className="button">Enter Qty</button>
      <button onClick={() => alert('Check In')} className="button">Check In</button>
      <button onClick={() => alert('Check Out')} className="button">Check Out</button>
      <button onClick={handleJoinLeave} className="button">
        {isMember ? 'Leave' : 'Join'}
      </button>
    </div>
  );
}

export default App;
