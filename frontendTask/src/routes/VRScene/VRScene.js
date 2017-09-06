import { Entity, Scene } from 'aframe-react';
import React from 'react';

export default class VRScene extends React.Component {
  render() {
    return (
      <Scene>
        <Entity
          primitive="a-sky"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cd/View_from_connors_hill_panorama.jpg"
        />
      </Scene>
    );
  }
}
