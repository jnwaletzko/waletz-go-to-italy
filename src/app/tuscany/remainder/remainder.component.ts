import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.css']
})
export class RemainderComponent implements OnInit {
  remainderImagePath = '../../assets/san_gimignano.jpg';
  constructor() { }

  ngOnInit() {
  }

}
