import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { equipements } from 'src/app/models/equipements.model';
import { RessourcesService } from 'src/app/services/ressources.service';

@Component({
  selector: 'app-materielles',
  templateUrl: './materielles.component.html',
  styleUrls: ['./materielles.component.scss']
})
export class MateriellesComponent implements OnInit {

  materielle: equipements[] = []

  employees: equipements = {
    nom: '',
    description: '',
    id: 0,
    disponibilite: ''
  };
  myForm4!: FormGroup;

  showAddForm = false
  showUpdateForm = false
  selectedMaterielle: equipements | undefined
  label = 'Ajouter'
  id = this.activatedRoute.snapshot.params['id']

  constructor(private ressourceService: RessourcesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) {

}

ngOnInit(): void {

  this.myForm4 = this.fb.group({
    nom: ['', Validators.required],
    description: ['', Validators.required]
  })

  this.AllMaterielles()
    
}

AllMaterielles(){
  this.ressourceService.getAllMaterielle()
  .subscribe(
    res => {
      this.materielle = res;
    }, (error: any) => {
      console.log(error)
    }
  )
}

addMaterielle() {
  this.ressourceService.saveMaterielle(this.myForm4.value).subscribe(data =>{
    alert("La ressource est ajoutée avec succès");
  });
  if(this.id) {
    this.router.navigate(['/materielles'])
  }
}


onClickForm() {
  this.showAddForm = !this.showAddForm;
  this.showUpdateForm = !this.showUpdateForm;
  this.selectedMaterielle = undefined;
}

// onFormSubmit(): void {
//   if (this.selectedMaterielle) {
//     this.ressourceService.updateHumaine({ id: this.selectedMaterielle.id, ...this.myForm4.value })
//       .subscribe(() => {
//         console.log('La ressource est modifiée avec succès');
//       });
//   } else {
//     this.ressourceService.saveHumaine(this.myForm4.value)
//       .subscribe(() => {
//         console.log('materielle added successfully');
//       });
//   }
//   this.showAddForm = false;
// }

onEditMaterielle(equipements: equipements):void{
  this.selectedMaterielle = equipements;
  this.showUpdateForm = true;
  console.log(console.log(this.selectedMaterielle))
}

updateHumain(m:equipements): void{
  this.ressourceService.updateMaterielle(m).subscribe(
    res=>{ console.log('materiel updated:', res);
  }
  )
}
}
