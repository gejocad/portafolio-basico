import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';


export const Banner = () => {
    
    return (
        <div>
          <Controller>
        <Scene duration={800} pin={true} enabled={true}>
          <div className="sticky"><div>header con titulo</div></div>
        </Scene>
        <Scene duration={800} pin={{ pushFollowers: true }}offset={800}>
          <div className="sticky"><div>imagen</div></div>
        </Scene>
        <div><h1>unoooo</h1></div>
      </Controller>
      </div>
    )
}
