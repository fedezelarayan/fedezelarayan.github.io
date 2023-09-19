import React from 'react'

import '../styles/About.css'

const About = () => {
  const calculate_age = () => {
    var today = new Date();
    var birthDate = new Date("1992-06-23");
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  }
  return (
    <div className='about' id="about">
      <h2>Conóceme</h2>
      <h3>
        Mi nombre es Federico Zelarayan, tengo 31 años, soy de Catamarca - Argentina y soy Desarrollador Web Fullstack!
      </h3>
      <p></p>
      <p className="words">

        He trabajado en proyectos académicos FullStack como parte de mis estudios, ambos en formato de comercio electrónico.
        En ambos proyectos, se utilizaron tecnologías como React, Node.js, JavaScript, Express y bases de datos relacionales
        (PostgreSQL con Sequelize), entre otras tecnologías. Junto con mi equipo, trabajamos siguiendo metodologías ágiles y
        utilizamos el flujo de trabajo de GitHub.
      </p>
      <p></p>
      <p className="words">

        Uno de los proyectos era una plataforma de comercio electrónico enfocada en la venta de libros digitales en varios formatos.
        El otro proyecto (en el cual me encuentro trabajando actualmente)está dirigido a un centro de desarrollo infantil llamado 'La Gruta'.
        Ambos proyectos incluían una tienda en línea funcional con filtros, capacidades de ordenamiento y funcionalidad de búsqueda por nombre.
        Además, contaban con paginación, integración de inicio de sesión por terceros, pasarelas de pago, carga de archivos e imágenes,
        así como un panel de administración.
      </p>
    </div>
  )
}
export default About;
