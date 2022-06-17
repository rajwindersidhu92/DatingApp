import { Component, Input, OnInit, Output } from '@angular/core';

@Component({ 
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() usersFromHomeComponent:any;
  @Output()
  model: any = {};

  constructor() { }

  ngOnInit(): void {

  console.log(this.usersFromHomeComponent);
  }

  register(){
    console.log(this.model)
  }

  cancel(){
    console.log("cancelled")
  }
}
