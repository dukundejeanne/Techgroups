import { Component, OnInit } from '@angular/core';
import { Tech } from '../tech';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  // goals: Tech[] = [
  //   new Tech(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2019,3,14)),
  //   new Tech(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
  //   new Tech(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2019,1,12)),
  //   new Tech(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
  //   new Tech(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
  //   new Tech(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2019,3,14)),
  // ];
  constructor() { }

  ngOnInit() {
  }

}
