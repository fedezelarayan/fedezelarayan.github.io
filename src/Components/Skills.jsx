import React from 'react'

import '../styles/Skills.css'

import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiPostgresql, SiFirebase, SiRedux, SiAmazonaws, SiMicrosoftsqlserver } from 'react-icons/si'

const Skills = () => {
  return (
    <div className='skills'>
      <h2>Mi stack tecnológico</h2>
      <div className="skill">
        <div className="js">
          <SiJavascript />
          <p>JavaScript</p>
        </div>
        <div className="html">
          <SiHtml5 />
          <p>HTML</p>
        </div>
        <div className="css">
          <SiCss3 />
          <p>CSS</p>
        </div>
        <div className="react">
          <SiReact />
          <p>React</p>
        </div>
        <div className="node">
          <SiNodedotjs />
          <p>Node JS</p>
        </div>
        <div className="fig">
          <SiRedux />
          <p>Redux</p>
        </div>
        <div className="fig">
          <SiMicrosoftsqlserver />
          <p>SQL</p>
        </div>
        <div className="mon">
          <SiPostgresql />
          <p>PostgreSQL</p>
        </div>
        <div className="fire">
          <SiFirebase />
          <p>Firebase</p>
        </div>
        <div className="ts">
          <SiAmazonaws />
          <p>AWS</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;