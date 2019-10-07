import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    public authService: AuthService,
    private _fb: FormBuilder,

  ) 
  {
    this.formLogin = this._fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.SignIn(this.formLogin.value['email'], this.formLogin.value['senha']);
  }
  get form() {
    return this.formLogin.controls;
  }

}
