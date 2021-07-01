import { Component, OnInit } from '@angular/core';
import {SceneService} from './service/scene.service';

@Component({
  selector: 'app-three-js',
  templateUrl: './three-js.component.html',
  styleUrls: ['./three-js.component.scss']
})
export class ThreeJsComponent implements OnInit {

  constructor(private scene: SceneService) { }

  ngOnInit(): void {

    this.scene.animate();
  }

}
