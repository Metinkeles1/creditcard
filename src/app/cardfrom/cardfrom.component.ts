import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cardfrom',
  templateUrl: './cardfrom.component.html',
  styleUrls: ['./cardfrom.component.css']
})
export class CardfromComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
