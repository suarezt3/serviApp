import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public messageError: string = ''
  public loginForm!: FormGroup


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }


  private initForm(): void {

      this.loginForm = this.fb.group({
        user: ['',Validators.required],
        password: ['',Validators.required],
      })
}


invalidField( field: string ) {
  return this.loginForm.get(field)?.invalid
          && this.loginForm.get(field)?.touched;
}


    login() {
      let user = this.loginForm.get('user')?.value
      let password = this.loginForm.get('password')?.value
      if(localStorage.getItem("token") == undefined){
        this.messageError = "Usuario o contraseña incorrectos"

      }
      if (this.loginForm.invalid) {
        this.loginForm.markAllAsTouched()
      } else {
        this.authService.getUser(user, password).subscribe( (user) => {
          this.router.navigate(['/'])
        })
      }

  }

}
