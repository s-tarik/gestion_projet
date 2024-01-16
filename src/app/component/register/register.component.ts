import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  userFormGroup!: FormGroup;
  errorMessage: any
  mssg : any

  utilisateur = {
    firstname:'',
    lastname:'',
    email:'',
    password:''
  }

  constructor(private fb: FormBuilder,
    private rs: RegisterService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.userFormGroup = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  // register() {
  //   let firstname = this.userFormGroup.value.firstname;
  //   let lastname = this.userFormGroup.value.lastname;
  //   let email = this.userFormGroup.value.email;
  //   let pwd = this.userFormGroup.value.password;

  //   const d = {
  //     "firstname": firstname, 
  //     "lastname": lastname, 
  //     "email": email, 
  //     "password": pwd
  //   }
  //   this.rs.register(d).subscribe(res => {
  //     console.log(res)
  //   }, error => {
  //     console.log(error)
  //   })
  // }

  register() {
    this.rs.createUser(this.userFormGroup.value).subscribe(
      res => {
        console.log('Utilisateur enregistré avec succès', res);

        this.mssg = 'Compte crée avec succès'
      }, error => {
        console.error('Erreur lors de l\'enregistrement de l\'utilisateur', error);
      }
    )
  }

}
