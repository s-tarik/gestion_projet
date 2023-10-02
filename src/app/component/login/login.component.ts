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

  userFormGroup! : FormGroup;
 errorMessage : any

  constructor(private fb : FormBuilder,
              private authService : AuthService,
              private router : Router ) { }

  ngOnInit(): void {
   if(this.authService.isAuthenticated()) {
     this.router.navigate(['/dashboard'])
    }
    this.userFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
 }

 handleLogin() {
  let email = this.userFormGroup.value.email;
  let pwd = this.userFormGroup.value.password;
  this.authService.login(email, pwd).subscribe({
    next: data => {
      console.log(data)
      this.authService.authUser(data.token).subscribe({
        next:()=> {
          this.router.navigateByUrl("/dashboard")
          .then(r => console.log(r))
        }
      })
    },
    error:(err) => {
      if(err.status === 403) {
        this.errorMessage = "Email ou mot de passe incorrect"
      }
    }
  })
 }

}