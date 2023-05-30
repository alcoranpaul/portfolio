



const projectTemplate = {
  project1: {
    name: 'Project Name 1',
    description: 'Project Description 1',
    image: 'Project Image 1',
  },
  project2: {
    name: 'Project Name 2',
    description: 'Project Description 2',
    image: 'Project Image 2',
  }
}



function App() {
  return (
    <>
      {Object.values(projectTemplate).map((project, index) => (
        <div key={index}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <img src={project.image} alt={project.name} />
        </div>
      ))}
    </>
  );
}

export default App;
