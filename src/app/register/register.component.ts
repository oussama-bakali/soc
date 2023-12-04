import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
 registrationform!: FormGroup;
 constructor(private fb: FormBuilder) { }

 ngOnInit(): void {
  this.registrationform = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    id: ['', Validators.required]
  });
 }
  
  
}
