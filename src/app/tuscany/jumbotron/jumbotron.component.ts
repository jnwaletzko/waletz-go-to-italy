import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  jumbotronImagePath = 'https://i.imgur.com/7UmrOde.jpg';

  constructor() { }

  ngOnInit() {
  }

}
