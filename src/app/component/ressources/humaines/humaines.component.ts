import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { employees } from 'src/app/models/employees.model';
import { RessourcesService } from 'src/app/services/ressources.service';

@Component({
  selector: 'app-humaines',
  templateUrl: './humaines.component.html',
  styleUrls: ['./humaines.component.scss']
})
export class HumainesComponent implements OnInit {

  humaines: employees[] = []

  employees: employees ={}
  myForm3!: FormGroup;
  myForm4!: FormGroup;



  showAddForm = false
  showUpdateForm = false
  selectedHumain: employees | undefined
  label = 'Ajouter'
  id = this.activatedRoute.snapshot.params['id']

  constructor(
    private fb: FormBuilder,
    private ressourceService: RessourcesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

}

ngOnChanges(){

}

ngOnInit(): void {
  this.myForm3 = this.fb.group({
    nom: ['', Validators.required],
    role: ['', Validators.required]
  })
  this.myForm4 = this.fb.group({
    nom: ['', Validators.required],
    role: ['', Validators.required]
  })

  this.AllHumaines()
    
}

AllHumaines(){
  this.ressourceService.getAllHumaines()
  .subscribe(
    res => {
      this.humaines = res;
    }, (error: any) => {
      console.log(error)
    }
  )
}

addHumain() {
  this.ressourceService.saveHumaine(this.myForm3.value).subscribe(data =>{
   
    console.log(data)
  }, error=> {
    console.log(error)
  });
  // if(this.id) {
  //   this.router.navigate(['/Humaines'])
  // }
}

onClickForm() {
  // if(this.id) {
  //   this.router.navigate(['/Ressources'])
  // }
  this.showAddForm = !this.showAddForm;
  this.showUpdateForm = !this.showUpdateForm;
  this.selectedHumain = undefined;
}

onFormSubmit(): void {
  if (this.selectedHumain) {
    this.ressourceService.updateHumaine(this.selectedHumain.id, this.myForm4.value)
      .subscribe(() => {
        console.log('La ressource est modifiée avec succès');
      });
  } 
  this.showAddForm = false;
}

onEditHumain(employees: employees):void{
  this.selectedHumain = employees;
  this.showUpdateForm = true;
  console.log(console.log(this.selectedHumain))
}

// updateHumain(h:employees): void{
//   this.ressourceService.updateHumaine(h).subscribe(
//     res=>{ console.log('humain updated:', res);
//   }
//   )
// }

}
