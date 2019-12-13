import { Component } from '@angular/core';
import {Tech} from './tech'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Techgroups';
  tech = [
    new Tech(1,'Watch Finding Nemo'),
    new Tech(2,'Buy Cookies'),
    new Tech(3, 'Get new Phone Case'),
    new Tech(4, 'Get Dog Food'),
    new Tech(5, 'Solve math homework'),
    new Tech(6, 'Plot my world domination plan'),
    ]
}
