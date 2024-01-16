import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProjectsServiceService } from '../services/projects-service.service';
import { Projects } from '../models/projects.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data-service';
import { of, switchMap } from 'rxjs';




@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnChanges {
  @Input() projects!: Projects[];
  @Input() isUpdate!: boolean;
  @Output() saveProject = new EventEmitter<Projects>();
  // project: Projects = {
  //   nom: undefined,
  //   description: '',
  //   dateDebut: undefined,
  //   dateFin: undefined,
  //   id: 0
  // } ;

  project: Projects =  {}

  myForm!: FormGroup;

  showAddForm  = false
  showUpdateForm = false
  label =  'Ajouter'
  selectedProject: Projects | undefined;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private ps:ProjectsServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) 
  {

  }


  ngOnChanges() {
    
  }


//   ngOnInit(): void {
//     this.initializeForm();
//     //this.dataService.dataList$.subscribe((data) => {
//       //this.myForm = data;
//     //});
    
//     if(this.id) {
//       this.showForm = true
//       this.label = "Retourner"
//     }

 
//   initializeForm() {
//     this.myForm = this.formBuilder.group({
//       nom: ['', Validators.required],
//       description: ['', Validators.required],
//       dateDebut: ['', Validators.required],
//       dateFin: ['', Validators.required]
//     })
//   }

//   onClickForm() {

//    this.showForm = !this.showForm
//   }

addProject(){
  this.ps.addProject(this.project).subscribe(res=>{
    location.reload()
    console.log(res)
    alert ("projet est ajouté avec succés")
  }, error => {
    console.log(error)
  })
}

// onEditProject(id: any) {
//   this.ps.getProject(id)
// }

ngOnInit(): void {
  const  ProjectId = this.activatedRoute.snapshot.params['id']

  if(ProjectId) {
    this.label = 'Modifier'
  }

  this.activatedRoute.paramMap.subscribe(params => {
    const projectId = params.get('id');
    if (projectId) {
      this.ps.findProject(projectId).subscribe(p => {
        this.project = p;
      });
    }
  });

  // if (ProjectId) {
  //   this.ps.findProject(ProjectId)
  //     .subscribe(p => {
  //       this.project = p
  //       console.log(this.project)

  //     })
  // }

  // this.myForm = this.fb.group({
  //   nom: ['', Validators.required],
  //   description: ['', Validators.required],
  //   dateDebut: [''],
  //   dateFin: ['']
  // });

 



  // this.activatedRoute.paramMap
  // .pipe(
  //   switchMap(params => {
  //     const idProject = params.get('id');
  //       if (idProject) {
  //         return this.ps.getProject(this.id);
  //       }
  //       return of(null);
  //     })
  //   )
  //   .subscribe(res => {
  //     if (res) {
  //       this.project = res;
  //     } else {
  //     this.project = {
  //         id: 0,
  //         nom: '',
  //         description: '',
  //         dateDebut: undefined,
  //         dateFin: undefined
  //       };
  //     }
  //   });

  //   initializeForm() {
  //   this.myForm = this.fb.group({
  //     nom: ['', Validators.required],
  //     description: ['', Validators.required],
  //     dateDebut: ['', Validators.required],
  //     dateFin: ['', Validators.required]
  //   })
  // }
  //   this.dataService.dataList$.subscribe((data) => {
  //     this.myForm = data;
  //   });
    
  //   if(this.id) {
  //     this.showAddForm = true
  //     this.label = "Retourner"
  //   }


}

// createForm(): void {
//   this.myForm = this.fb.group({
//     nom: ['', Validators.required],
//     description: ['', Validators.required],
//     dateDebut: [''],
//     dateFin: ['']
//   });
// }

// addProject (){
//  this.ps.save(this.myForm.value).subscribe(data =>{ 
//     alert("Le projet est ajouté avec succès");
//   });
//   if(this.id) {
//     this.router.navigate(['/projects'])
//   }
// }
onClickForm(): void {
  const  ProjectId = this.activatedRoute.snapshot.params['id']

  if(!ProjectId) {
    this.router.navigate(['/projects'])
    this.label = "Ajouter"
  }else{
     this.label = "Modifier"
    }
  this.showAddForm = !this.showAddForm;
  this.showUpdateForm = !this.showUpdateForm;
  this.selectedProject = undefined;
}

// addOrUpdateProject(project: Projects){
//   if(this.selectedProject) {
//         this.ps.updateProject({ id: this.selectedProject.id, ...this.myForm.value })
//         .subscribe(() => {
//         console.log('Le projet est modifié avec succès');
//       });
//   } else {
//     this.ps.createProjects(this.myForm.value).subscribe(() => {
//       console.log('Le projet est créer avec succès');
//     })
//   }
// }

// onFormSubmit(): void {
//   if (this.selectedProject) {
//     this.ps.updateProject({ id: this.selectedProject.id, ...this.myForm.value })
//       .subscribe(() => {
//         console.log('Le projet est modifié avec succès');
//       });
//   } else {
//     this.ps.save(this.myForm.value)
//       .subscribe(() => {
//         console.log('Project added successfully');
//       });
//   }

//   this.showAddForm = false;
// }

// onEditProject(project: Projects): void {
//   this.selectedProject = project;
//   this.showUpdateForm = true;
//   console.log(console.log(this.selectedProject))
// }

// updateProject (p: Projects): void {
//   this.ps.updateProject(p).subscribe(
//     res=>{ console.log('project updated:', res);
//     }
//   )
// }

// saveOrUpdate(){
//   this.saveProject.emit(this.project)
// }

}

