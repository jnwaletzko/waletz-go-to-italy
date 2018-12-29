import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  jumbotronImagePath = 'https://i.imgur.com/GiRciCR.jpg';
  aliJakeImagePath = 'https://i.imgur.com/cEbQg4l.jpg';
  constructor() { }

  ngOnInit() {
  }

}
