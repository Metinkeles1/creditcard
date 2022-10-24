import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cardfrom',
  templateUrl: './cardfrom.component.html',
  styleUrls: ['./cardfrom.component.css']
})
export class CardfromComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
