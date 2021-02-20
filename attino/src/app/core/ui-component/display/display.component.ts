import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'at-h1',
  template: '<h1>{{content}} </h1>',
  styleUrls: ['./display.component.scss'],
})
export class H1DisplayComponent implements OnInit {
  constructor() {}
  @Input() content: any;
  ngOnInit(): void {}
}

@Component({
  selector: 'at-h2',
  template: '<h2>{{content}} </h2>',
  styleUrls: ['./display.component.scss'],
})
export class H2DisplayComponent implements OnInit {
  constructor() {}
  @Input() content: any;
  ngOnInit(): void {}
}

@Component({
  selector: 'at-h3',
  template: '<h3>{{content}} </h3>',
  styleUrls: ['./display.component.scss'],
})
export class H3DisplayComponent implements OnInit {
  constructor() {}
  @Input() content: any;
  ngOnInit(): void {}
}

@Component({
  selector: 'at-p',
  template: '<p>{{content}} </p>',
  styleUrls: ['./display.component.scss'],
})
export class ParagraphDisplayComponent implements OnInit {
  constructor() {}
  @Input() content: any;
  ngOnInit(): void {}
}
