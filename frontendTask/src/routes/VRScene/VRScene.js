import { Entity, Scene } from 'aframe-react';
import React from 'react';

const VRScene = props => (
  <Scene>
    <Entity
      primitive="a-sky"
      src={
        props.location.state.url
        /*`https://upload.wikimedia.org/wikipedia/commons/c/cd/View_from_connors_hill_panorama.jpg` */
      }
    />
  </Scene>
);

export default VRScene;
