import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PizzaService} from "../pizza-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  signupForm: FormGroup | any;
  typeOfLogin: string = '';

  hide = true;
  showDorm: boolean = false;
  arrayOfCity = [
    "Ivano-Frankivsk",
    "Lviv",
    "Kiev"
  ];

  constructor(public service: PizzaService, private router:Router) {
  }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

    this.signupForm = new FormGroup({
      phone: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),

      address: new FormGroup({
        city: new FormControl('',),
        street: new FormControl('',),
        houseNumber: new FormControl('',)
      }),
      passwordSignup: new FormControl('', [Validators.required]),
      secondPassword: new FormControl('', [Validators.required])

    });
  }

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get name() {
    return this.signupForm.get('name');
  }

  get phone() {
    return this.signupForm.get('phone');
  }

  get city() {
    return this.signupForm.get('address').get('city');
  }

  get street() {
    return this.signupForm.get('address').get('street');
  }

  get houseNumber() {
    return this.signupForm.get('address').get('houseNumber');
  }

  get passwordSignup() {
    return this.signupForm.get('passwordSignup');
  }

  get secondPassword() {
    return this.signupForm.get('secondPassword');
  }

  getObjUser(name: any, phoneNumber: any, password: any, city: any, street: any, house: any, roleId: string = '2') {
    return {
      name, phoneNumber, password, city, street, house, roleId
    }
  }

  onSubmitSignup() {
    let user = this.getObjUser(
      this.signupForm.get('name').value,
      this.signupForm.get('phone').value,
      this.signupForm.get('passwordSignup').value,
      this.signupForm.get('address').get('city').value,
      this.signupForm.get('address').get('street').value,
      this.signupForm.get('address').get('houseNumber').value
    );
    this.service.addUser(user);
  }


  onSubmit() {

    console.log(this.loginForm.get('login').value, this.loginForm.get('password').value);
    let obj = {
      username: this.loginForm.get('login').value,
      password: this.loginForm.get('password').value
    }

    this.service.login(obj);


  }

}
