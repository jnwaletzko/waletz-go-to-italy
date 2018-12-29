import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  jumbotronImagePath = '../../assets/the_spot.jpg';
  aliJakeImagePath = '../../assets/amazing_us.jpg';
  constructor() { }

  ngOnInit() {
  }

}
