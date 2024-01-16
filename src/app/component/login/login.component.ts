import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userFormGroup! : FormGroup;
  errorMessage : any

  constructor(private fb : FormBuilder,
              private rs :  RegisterService,
              private router : Router ) { }

  ngOnInit(): void {
  //  if(this.rs.login(email: String, p)) {
  //    this.router.navigate(['/dashboard'])
  //   }
    this.userFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
 }
 register() {
  this.rs.createUser(this.userFormGroup.value).subscribe(
    res => {
      console.log('Utilisateur enregistré avec succès', res);
    }, error => {
      console.error('Erreur lors de l\'enregistrement de l\'utilisateur', error);
    }
  )
}


 handleLogin() {

  let email = this.userFormGroup.value.email;
  let pwd = this.userFormGroup.value.password;

  this.rs.login(email, pwd).subscribe(
    (response: any) => {
    },
    error => {

      if(error.status === 200) {
        localStorage.setItem("authUser", error.error.text)
        this.router.navigate(['/dashboard'])
  
       }else if(error.status === 401) {
       this.errorMessage = "Email ou mot de passe Incorrect"
  
       }
    }
  );
 }

}

