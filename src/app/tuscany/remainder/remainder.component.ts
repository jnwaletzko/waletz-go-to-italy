import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.css']
})
export class RemainderComponent implements OnInit {
  remainderImagePath = 'https://i.imgur.com/DFmvlj4.jpg';
  constructor() { }

  ngOnInit() {
  }

}
