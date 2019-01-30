import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accomadations',
  templateUrl: './accomadations.component.html',
  styleUrls: ['./accomadations.component.css']
})
export class AccomadationsComponent implements OnInit {
  remainderImagePath = 'https://i.imgur.com/DFmvlj4.jpg';

  constructor() { }

  ngOnInit() {
  }

  onTenutaClick() {
    window.open('https://goo.gl/maps/K3A8BGFAd3K2', '_blank');
  }

  onDefizioClick() {
    window.open('https://goo.gl/maps/KRy2ozuvqCP2', '_blank');
  }
}
