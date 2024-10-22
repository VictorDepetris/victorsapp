import React, { useState } from 'react';
import './App.css';
import { Button, Card, CardContent, Typography } from '@mui/material';

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
    <Card className="project-card" variant="outlined">
      <CardContent>
        <Typography variant="h6">{project.name}</Typography>
        <Typography variant="body2">Authorized Users: {project.users.join(', ') || 'None'}</Typography>
        <Typography variant="body2">HWSet1: {project.hwSet1}/100</Typography>
        <Typography variant="body2">HWSet2: {project.hwSet2}/100</Typography>
        <Button variant="contained" onClick={() => alert('Enter Quantity')} style={{ margin: '5px' }}>
          Enter Qty
        </Button>
        <Button variant="contained" onClick={() => alert('Check In')} style={{ margin: '5px' }}>
          Check In
        </Button>
        <Button variant="contained" onClick={() => alert('Check Out')} style={{ margin: '5px' }}>
          Check Out
        </Button>
        <Button
          variant="contained"
          color={isMember ? 'secondary' : 'primary'}
          onClick={handleJoinLeave}
          style={{ margin: '5px' }}
        >
          {isMember ? 'Leave' : 'Join'}
        </Button>
      </CardContent>
    </Card>
  );
}

export default App;
