import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';


export const Banner = () => {
    
    return (
        <div>
          <Controller>
        <Scene duration={1} pin={true} enabled={true}>
        <section class="bgimage">
  
</section>

        </Scene>
        <section class="bgimage2"></section>
        <Scene duration={800} pin={{ pushFollowers: true }}offset={-400}>
        
        
        
          <div className="container-fluid prueba">
          <header class="header">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarCenteredExample"
      aria-controls="navbarCenteredExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div
      className="collapse navbar-collapse justify-content-around"
      id="navbarCenteredExample"
    >
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://i.ibb.co/SfQM1J6/wagon-banner-1.png">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://i.ibb.co/SfQM1J6/wagon-banner-1.png">Proyectos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://i.ibb.co/SfQM1J6/wagon-banner-1.png">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://i.ibb.co/SfQM1J6/wagon-banner-1.png">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://i.ibb.co/SfQM1J6/wagon-banner-1.png">Productos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
        <section>
        <div className="hero-image">
  <div className="hero-text">
    <h1>I am Jane Doe</h1>
    <h3>And I'm a Photographer</h3>
    <button>Hire me</button>
  </div>
</div>
</section>
   </div>
        </Scene>
        
      </Controller>
      </div>
    )
}
