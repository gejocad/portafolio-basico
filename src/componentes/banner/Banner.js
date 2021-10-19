import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';


export const Banner = () => {
    
    return (
        <div>
          <Controller>
        <Scene duration={1} pin={true} enabled={true}>
        <section className="bgimage">
</section>

        </Scene>
        <section className="bgimage2"></section>
        <Scene duration={730} pin={{ pushFollowers: true }}offset={-400}>
        
        
        
          <div className="container-fluid ajuste-alt">
            
  <div className="circulo-mejor1"></div>
  
          <header className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          <a className="link resaltar-link" aria-current="page" href="https://i.ibb.co/SfQM1J6/wagon-banner-1.png">INICIO</a>
        </li>
        <li className="nav-item">
          <a className="link resaltar-link" href="https://i.ibb.co/SfQM1J6/wagon-banner-1.png">PROYECTOS</a>
        </li>
        <li className="nav-item">
          <h2 className="logo">Name logo</h2>
        </li>
        <li className="nav-item">
          <a className="link resaltar-link" href="https://i.ibb.co/SfQM1J6/wagon-banner-1.png">SKILLS</a>
        </li>
        <li className="nav-item">
          <a className="link resaltar-link" href="https://i.ibb.co/SfQM1J6/wagon-banner-1.png">PRODUCTOS</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
        <section>
          
        <div className="">
  <div className="">
    <h1 className="hero">Lorem ipsum</h1>
    <p className="sub-hero">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." </p>
  </div>
</div>
</section>
   </div>
        </Scene>
        
      </Controller>
      </div>
    )
}
