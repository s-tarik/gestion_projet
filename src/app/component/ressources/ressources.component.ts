import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { Ressources } from 'src/app/models/ressources.model';
import { ProjectsServiceService } from 'src/app/services/projects-service.service';
import { RessourcesService } from 'src/app/services/ressources.service';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.scss']
})
export class RessourcesComponent {
  // @Input() Ressource!: Ressources[];
  // @Output() onEdit = new EventEmitter<Ressources>();

  ressource : Ressources = {};

  myForm2!: FormGroup
   showAddForm = false
   showUpdateForm = false
   ressourceId !: number
   projectId!: number
   projet !: any[]
   selectedRessource : Ressources | undefined
   label = 'Ajouter'
   id = this.activatedRoute.snapshot.params['id']

  constructor(
              private fb : FormBuilder,
              private ressourceService: RessourcesService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private ps: ProjectsServiceService) {

  }

  ngOnChanges(){

  }

  ngOnInit(): void {
    // this.myForm2 = this.fb.group({
    //   nom: ['', Validators.required],
    //   type: ['', Validators.required]
    // });
    
    // this.AllRessources();

    const  RessourceId = this.activatedRoute.snapshot.params['ressourceId']

    if(RessourceId) {
      this.label = 'Modifier'
    }
  
    this.activatedRoute.paramMap.subscribe(params => {
      const RessourceId = params.get('ressourceId');
      if (RessourceId) {
        this.ressourceService.getRessourceById(RessourceId).subscribe(r => {
          this.ressource = r;
        });
      }
    }); 

    // if(this.id) {
    //   this.showForm = true
    //   this.label = "Retourner"
    // }

    // this.activatedRoute.paramMap
    // .pipe(
    //   switchMap(params => {
    //     const idRessouce = params.get('id');
    //     if (idRessouce) {
    //       return this.ressourceService.getRessource(this.id);
    //     }
    //     return of(null);
    //   })
    // )
    // .subscribe(res => {
    //   if (res) {
    //     this.ressource = res;
    //   } else {
    //     this.ressource = {
    //       nom: '',
    //       type: '',
    //     };
    //   }
    // });

  }

  // AllRessources() {
  //   this.ressourceService.getAllRessources()
  //   .subscribe(
  //     res => {
  //       this.ressources = res;
  //     }, (error: any) => {
  //       console.log(error)
  //     }
  //   )
  // }

  loadressource(): void {}

  loadProject(): void {
    this.ps.getAllProjects().subscribe((data)=>{
      this.projet = data;
    });
  }

  saveRessource(): void {
    const  RessourceId = this.activatedRoute.snapshot.params['ressourceId']
    const  ProjectId = this.activatedRoute.snapshot.params['projectId']


    if(RessourceId){
   
      this.ressourceService.updateRessource(RessourceId, this.ressource).subscribe(() => {
        
       location.reload();
      });
    } else {
      this.ressourceService.createRessource(ProjectId, this.ressource).subscribe(() => {
        this.router.navigate(['/ressources', '/projects', ProjectId]);
        location.reload();
      })
    }
  }

  onClickForm() {
    // if(this.id) {
    //   this.router.navigate(['/ressources'])
    // }
    const  RessourceId = this.activatedRoute.snapshot.params['ressourceId']
    const  ProjectId = this.activatedRoute.snapshot.params['projectId']

    if(!RessourceId) {
      this.router.navigate(['/ressources/projects/', ProjectId])
      this.label = "Ajouter"
    }
    this.label = "Modifier"

    this.showAddForm = !this.showAddForm;
    this.showUpdateForm = !this.showUpdateForm;
    this.selectedRessource = undefined;
  }

  // onFormSubmit(): void {
  //   if (this.selectedRessource) {
  //     this.ressourceService.updateRessource({ id: this.selectedRessource.id, ...this.myForm2.value })
  //       .subscribe(() => {
  //         console.log('La tâche est modifiée avec succès');
  //       });
  //   } else {
  //     this.ressourceService.saveRessources(this.myForm2.value)
  //       .subscribe(() => {
  //         console.log('tache added successfully');
  //       });
  //   }
  //   this.showAddForm = false;
  // }

  // addRessource(){
  //   this.ressourceService.saveRessources(this.ressource)
  //   .subscribe(res => {
  // alert("la ressources est ajoutée avec succès")
  //   });
  //   if(this.id) {
  //     this.router.navigate(['/ressources'])
  //   }
  // }


  // AllRessources(){
  //   this.ressourceService.getAllRessources()
  //   .subscribe(
  //     res => {
  //       this.ressources = res;
  //     }
  //   )
  // }

  // updateRessource(r: Ressources){
  //   this.ressourceService.updateRessource(r).subscribe(
  //     res => { console.log('ressource updates:', res);
  //   }
  //   )
  // }

  // onEditRessource(ressource: Ressources):void{
  //   this.selectedRessource = ressource;
  //   this.showUpdateForm = true;
  //   console.log(console.log(this.selectedRessource))
  // }

  // onDelete(r : Ressources){
  //   let v = confirm("Êtes-vous sûre??");
  //   if(v == true)
  //   this.ressourceService.deleteRessouces(r).subscribe(
  //     res=>{
  //       this.AllRessources();
  //     }
  // )      
  // }

  // editRessource(ressource: Ressources): void{
  //   this.onEdit.emit(ressource)
  // }
}
