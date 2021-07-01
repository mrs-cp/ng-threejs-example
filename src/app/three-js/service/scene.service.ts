import { Injectable } from '@angular/core';
import * as THREE from 'three';
@Injectable({
  providedIn: 'root'
})
export class SceneService {

  constructor() { }
  animate(): void {
    const canvas = document.querySelector('#canvas');
    // @ts-ignore
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setSize( 500, 300 );
    renderer.setClearColor('goldenrod');
    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
    camera.position.set( 0, 0, 50 );
    camera.lookAt( 0, 0, 0 );

    const scene = new THREE.Scene();
    const material = new THREE.LineBasicMaterial( { color: 0xffffff});
    const points = [];
    points.push( new THREE.Vector3( - 10, 0, 0 ) );
    points.push( new THREE.Vector3( 0, 10, 0 ) );
    points.push( new THREE.Vector3( 10, 0, 0 ) );
    points.push( new THREE.Vector3( -10, 0, 0 ) );
    points.push( new THREE.Vector3( 0, -10, 0 ) );
    points.push( new THREE.Vector3( 10, 0, 0 ) );
    const geometry = new THREE.BufferGeometry().setFromPoints( points );
    const line = new THREE.Line( geometry, material );

    const geometry2 = new THREE.BoxGeometry(4, 4, 4);
    const material2 = new THREE.MeshBasicMaterial({color: 'white'});
    const box = new THREE.Mesh(geometry2, material2);

    const material3 = new THREE.MeshBasicMaterial({color: 0xff50b0 });
    const material4 = new THREE.MeshBasicMaterial({color: 'lightgrey' });
    const box2 = new THREE.Mesh(geometry2, material3);
    const box3 = new THREE.Mesh(geometry2, material4);


    scene.add( line, box2, box, box3 );

    const animate = (time: number) => {
      time *= 0.001;

      box2.rotation.x = time;
      box2.rotation.y = time;
      box.rotation.x = time * 2;
      box.rotation.y = time * 2;
      box3.rotation.x = time * 3;
      box3.rotation.y = time * 3;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate(1);
  }

}
