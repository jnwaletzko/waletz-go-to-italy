import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  special_day = new Date('2019-5-28');
  time: number;
  counter$: Observable<number>;
  subscription: Subscription;
  message: string;

  constructor() { }

  ngOnInit() {
    this.counter$ = interval(1000).pipe(map(
      (number: number) => {
        return Math.floor((this.special_day.getTime() - new Date().getTime()) / 1000);
      }
    ));
    this.subscription = this.counter$.subscribe(
      (x) => this.message = this.dhms(x));
  }

  dhms(t) {
    const days = Math.floor(t / 86400);
    t -= days * 86400;
    const hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    const minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    const seconds = t % 60;

    return [
        days + 'd',
        hours + 'h',
        minutes + 'm',
        seconds + 's'
    ].join(' ');
  }
}
