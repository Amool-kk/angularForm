import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  selected1 = 0;
  selected2 = 0;
  selected3 = 0;
  selected4 = 0;
  selected5 = 0;

  hovered = 0;
  readonly = false;

  constructor() { }

  ngOnInit(): void {
  }

}
