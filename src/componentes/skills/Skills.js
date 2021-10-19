import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween,  SplitLetters } from 'react-gsap';


export const Skills = () => {
    
    return (
        <div>
          <section className="bgimage4">
                <p className="triangulo-equilatero-bottom"></p>
            <div>
            <div className="section" />
    <Controller>
      <Scene
        pin={false}
        reverse={true}
        duration={500}
        offset={-800}        
      >
        <Tween 
          wrapper={
            <div className="textContainer" />
          }
          staggerFrom= {{
            left: -2000,
            rotation: -720,
            opacity: 0,
            color: '#ff0000',
            ease: 'Expo.easeOut',
          }}
          stagger={0.15}
          onCompleteAll={() => { console.log('on complete all'); }}
        >
            
        <div className="hero3 text">
        <SplitLetters>
            <p>S</p>
        </SplitLetters>
        <SplitLetters>
            <p>K</p>
        </SplitLetters>
        <SplitLetters>
            <p>I</p>
        </SplitLetters>
        <SplitLetters>
            <p>L</p>
        </SplitLetters>
        <SplitLetters>
            <p>L</p>
        </SplitLetters>
        <SplitLetters>
            <p>S</p>
        </SplitLetters>
        </div>
        </Tween>
      </Scene>
      <div/>
    </Controller>
              <img
                    src={'https://serakidigital.co.ke/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-6611936.jpg'}
                    className="imagen-end"
                    alt="User"
                />
            </div>
            <div className="skill">
            <img
                    src={'https://i.ibb.co/0DRjZht/Icon-simple-css3.png'}
                    className="skill-img"
                    alt="User"
                />
            <div>
            <a className="skill-title" href="https://i.ibb.co/0DRjZht/Icon-simple-css3.png">Lorem ipsum dolor</a>
                <p className="footer-p">consectetur adipiscing elit. Phasellus porta neque at tortor volutpat, vitae ullamcorper sapien eleifend. Fusce eu erat iaculis, gravida ex at, tempor ante. Praesent feugiat, magna eget varius placerat, quam enim ultrices urna, sed facilisis nibh sem ac felis. In quis consequat</p>
            </div>
            </div>
            <div className="skill">
            <img
                    src={'https://i.ibb.co/CzPnZ6W/Icon-awesome-html5.png'}
                    className="skill-img"
                    alt="User"
                />
            <div>
            <a className="skill-title" href="https://i.ibb.co/CzPnZ6W/Icon-awesome-html5.png">Lorem ipsum dolor</a>
                <p className="footer-p">consectetur adipiscing elit. Phasellus porta neque at tortor volutpat, vitae ullamcorper sapien eleifend. Fusce eu erat iaculis, gravida ex at, tempor ante. Praesent feugiat, magna eget varius placerat, quam enim ultrices urna, sed facilisis nibh sem ac felis. In quis consequat</p>
            </div>
            </div>
            <div className="skill">
            <img
                    src={'https://i.ibb.co/CzPnZ6W/Icon-awesome-html5.png'}
                    className="skill-img"
                    alt="User"
                />
            <div>
            <a className="skill-title" href="https://i.ibb.co/CzPnZ6W/Icon-awesome-html5.png">Lorem ipsum dolor</a>
                <p className="footer-p">consectetur adipiscing elit. Phasellus porta neque at tortor volutpat, vitae ullamcorper sapien eleifend. Fusce eu erat iaculis, gravida ex at, tempor ante. Praesent feugiat, magna eget varius placerat, quam enim ultrices urna, sed facilisis nibh sem ac felis. In quis consequat</p>
            </div>
            </div>
  </section>
      <footer>
          <h1 className="footer-titulo">@Lorem ipsum dolor</h1>
          <div className="rrss-contenedor">
          <a href="https://imgbb.com/"><img src={"https://i.ibb.co/zbMvhm9/Icon-awesome-instagram.png"} alt="Icon-awesome-instagram" className="rrss"/></a>
<a href="https://imgbb.com/"><img src={"https://i.ibb.co/3WGYRWs/Icon-awesome-facebook.png"} alt="Icon-awesome-facebook" className="rrss"/></a>
<a href="https://imgbb.com/"><img src={"https://i.ibb.co/4TB4Ybp/Icon-awesome-pinterest.png"} alt="Icon-awesome-pinterest" className="rrss"/></a>
</div>
      </footer>
      </div>
    )
}
