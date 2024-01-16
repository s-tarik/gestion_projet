import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { Tache } from 'src/app/models/taches.model';
import { DataService } from 'src/app/services/data-service';
import { ProjectsServiceService } from 'src/app/services/projects-service.service';

@Component({
  selector: 'app-afficher-projet',
  templateUrl: './afficher-projet.component.html',
  styleUrls: ['./afficher-projet.component.scss']
})
export class AfficherProjetComponent implements OnInit, OnChanges{
  


  tache : Tache = {};
  myForm1!: FormGroup;

  showAddForm  = false
  showUpdateForm = false
  label =  'Ajouter'
  tacheId !: number
  projectId!: number
  projet !: any[]
  selectedTache: Tache | undefined;


  constructor (  
      private fb: FormBuilder,
      private dataService: DataService,
      private ps:ProjectsServiceService,
      private router: Router,
      private activatedRoute: ActivatedRoute) {


               }
  ngOnChanges() {
   
  }
  
  ngOnInit(): void {
    // this.myForm1 = this.fb.group({
    //   nom: ['', Validators.required],
    //   description: ['', Validators.required],
    //   responsable:['', Validators.required],
    //   dateDebut: [''],
    //   dateFin: [''] 
    // });

    const  TacheId = this.activatedRoute.snapshot.params['tacheId']

    if(TacheId) {
      this.label = 'Modifier'
    }
  
    this.activatedRoute.paramMap.subscribe(params => {
      const TacheId = params.get('tacheId');
      if (TacheId) {
        this.ps.getTacheById(TacheId).subscribe(t => {
          this.tache = t;
        });
      }
    }); 

    // this.activatedRoute.params.subscribe((params) => {
    //   this.tacheId = params['tacheId'];
    //   this.projectId = params['projectId']
    //   this.loadTache();
    //   this.loadProject();
    // });


    // if(this.tacheId) {
    //   this.showAddForm = true
    //   this.label = "Retourner"
    // }
    // this.activatedRoute.paramMap
    //   .pipe(
    //     switchMap(params => {
    //       const idTache = params.get('tacheId');
    //       if (idTache) {
    //         return this.ps.getTache(this.tacheId);
    //       }
    //       return of(null);
    //     })
    //   )
    //   .subscribe(res => {
    //     if (res) {
    //       this.tache = res;
    //     } else {
    //       this.tache = {
    //         nom: '',
    //         description: '',
    //         dateDebut: undefined,
    //         dateFin: undefined
    //       };
    //     }
    //   });

    
  }

  loadTache(): void {}

  loadProject(): void {
    this.ps.getAllProjects().subscribe((data)=>{
      this.projet = data;
    });
  }

  saveTache(): void {
    const  TacheId = this.activatedRoute.snapshot.params['tacheId']
    const  ProjectId = this.activatedRoute.snapshot.params['projectId']


    if(TacheId){
   
      this.ps.updateTache(TacheId, this.tache).subscribe(() => {
        
       location.reload();
      });
    } else {
      this.ps.createTache(ProjectId, this.tache).subscribe(() => {
        this.router.navigate(['/taches/projects', ProjectId]);
        location.reload();
      })
    }
  }
  // addTache(){
  //   this.ps.saveTache(this.myForm1.value).subscribe(data =>{
  //     alert("La tâche est ajoutée avec succès");
  //   });
  //   if(this.tacheId) {
  //     this.router.navigate(['/taches'])
  //   }
  // }


  onClickForm() {
    const  TacheId = this.activatedRoute.snapshot.params['tacheId']
    const  ProjectId = this.activatedRoute.snapshot.params['projectId']

    if(!TacheId) {
      this.router.navigate(['/taches/projects/', ProjectId])
      this.label = "Ajouter"
    }else{ 
    this.label = "Modifier"}
   this.showAddForm = !this.showAddForm;
   this.showUpdateForm = !this.showUpdateForm;
   this.selectedTache = undefined;
  }

  // createTache(): void {
  //   this.ps.createTacheInProjectById(this.projectId, this.tache)
  //     .subscribe(
  //       (createdTache: Tache) => {
  //         console.log('Tache created:', createdTache);
  //       }, error => {
  //         console.log('Error creating Tache:', error);
  //       }
  //     );
  // }

  // onFormSubmit(): void {
  //   if (this.selectedTache) {
  //     this.ps.updateTache({ id: this.selectedTache.id, ...this.myForm1.value })
  //       .subscribe(() => {
  //         console.log('La tâche est modifiée avec succès');
  //       });
  //   } else {
  //     this.ps.saveTache(this.myForm1.value)
  //       .subscribe(() => {
  //         console.log('tache added successfully');
  //       });
  //   }
  //   this.showAddForm = false;
  // }

  // onEditTache(tache: Tache):void{
  //   this.selectedTache = tache;
  //   this.showUpdateForm = true;
  //   console.log(console.log(this.selectedTache))
  // }

  // updateTache(t:Tache): void{
  //   this.ps.updateTache(t).subscribe(
  //     res=>{ console.log('tache updated:', res);
  //   }
  //   )
  }

