import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss'],
})
export class RegisterScreenComponent implements OnInit {
  constructor() {}
  counter = 1;
  ngOnInit(): void {}

  name = 'Wizard';
  goingNext = false;
  finished = false;
  stepSaving = [{
    time: 3000,
    value: true
  },{
    time: 5000,
    value: true
  },{
    time: 1000,
    value: false
  }];

  stepExit(): Promise<boolean> {
    this.goingNext = true;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 100);
    })
  }
  onFinished(): void {
  }
}
