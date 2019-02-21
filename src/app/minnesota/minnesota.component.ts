import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minnesota',
  templateUrl: './minnesota.component.html',
  styleUrls: ['./minnesota.component.css']
})
export class MinnesotaComponent implements OnInit {
  jumbotronImagePath = 'https://i.imgur.com/5Tmlx8g.jpg';
  constructor() { }

  ngOnInit() {
  }

  onWindsongClick() {
    window.open('https://goo.gl/maps/v6HbMEoYYqT2', '_blank');
  }

}
