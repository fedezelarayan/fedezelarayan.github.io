import React from 'react';
import Project from './Project.jsx';
import '../styles/Projects.css';

const Projects = () => {
  const projectsInfo = {
    one: {
      name: 'BookVerse',
      desc: 'BookVerse es un e-commerce full-stack en el que participé, dedicado a la venta de libros, noticias y últimos lanzamientos literarios en diferentes formatos. Con mi equipo trabajamos bajo la modalidad de metodologías ágiles y utilizando el flujo de trabajo de Git.',
      liveLink: 'https://bookverse-client.vercel.app/',
      githubLink: 'https://github.com/GianPolastri/BookVerse-API',
      techs: ['JavaScript', 'NodeJs', 'SQLServer', 'React', 'Redux', 'HTML', 'CSS' ], 
      isOpenSource: true
    },
    two: {
      name: 'La Gruta',
      desc: 'La Gruta es un proyecto full-stack en el que me encuentro trabajando, el cual está destinado un centro de desarrollo infantil llamado “La Gruta”. Con mi equipo trabajamos bajo la modalidad de metodologías ágiles y utilizando el flujo de trabajo de Git.',
      liveLink: 'website url',
      githubLink: 'https://github.com/',
      techs: ['JavaScript', 'NodeJs', 'SQLServer', 'ReactJS', 'Redux', 'HTML', 'CSS' ],
      isOpenSource: true
    }
  }
  return (
    <div className="Projects" id="projects" >
      <h2>My Projects</h2>
      <div>
        <Project info={projectsInfo.one} />
        <Project info={projectsInfo.two} />
      </div>
    </div>
  )
}

export default Projects;
