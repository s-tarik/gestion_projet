import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { SettingsComponent } from './component/settings/settings.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { AfficherProjetComponent } from './component/afficher-projet/afficher-projet.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { RessourcesComponent } from './component/ressources/ressources.component';
import { RegisterComponent } from './component/register/register.component';
import { CommencerComponent } from './component/commencer/commencer.component';
import { FrogotPasswordComponent } from './component/frogot-password/frogot-password.component';
import { ToDoComponent } from './component/to-do/to-do.component';
import { PlanificationComponent } from './component/planification/planification.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProfilUtilisateurComponent } from './component/profil-utilisateur/profil-utilisateur.component';
import { HumainesComponent } from './component/ressources/humaines/humaines.component';
import { MateriellesComponent } from './component/ressources/materielles/materielles.component';
import { FinancieresComponent } from './component/ressources/financieres/financieres.component';
import { ListTacheComponent } from './component/afficher-projet/list-tache/list-tache.component';

const routes: Routes = [
  { path:'commencer', component : CommencerComponent},
  { path:'login', component : LoginComponent},
  { path: 'forgotPassword', component : FrogotPasswordComponent},
  { path:'register', component : RegisterComponent},
  { path:'' , component: HomeComponent, 
  children: [

    {
      path: 'dashboard', component: DashboardComponent
    },

    {
      path: 'projects', component: ProjectsComponent
    },

    {
      path:'projects/:id', component: ProjectsComponent
    },

    {
      path:'projects-list', component: ProjectsListComponent
    },

    // {
    //   path: 'taches', component:ListTacheComponent
    // },


    {
      path:'', redirectTo:'/taches', pathMatch:'full'
    },

    {
      path:'ressources', component: RessourcesComponent
    },

    {
      path: 'ressources/projects/:projectId', component: RessourcesComponent
    },

    {
      path: 'ressources/:ressourceId/projects/:projectId', component: RessourcesComponent
    },
     
    {
      path:'settings', component: SettingsComponent
    },


    // {
    //   path: 'taches', component: AfficherProjetComponent
    // },


    // {
    //   path: 'taches/:id', component: AfficherProjetComponent
    // },

    {
      path:'ToDo', component: ToDoComponent
    },

    {
      path:'Planification', component: PlanificationComponent
    },

    {
      path:'Contact', component: ContactComponent
    },

    {
      path:'Profil', component: ProfilUtilisateurComponent
    },

    {
      path:'humaines', component: HumainesComponent
    },

    {
      path:'materielles', component: MateriellesComponent
    },

    {
      path:'financieres', component: FinancieresComponent
    },

    {
      path: 'taches/projects/:projectId', component: AfficherProjetComponent
    },

    {
      path: 'taches/:tacheId/projects/:projectId', component: AfficherProjetComponent
    },


    // {
    //   path: '/projects/:projectId/taches', component: AfficherProjetComponent
    // },

   

    // {
    //   path: 'taches/new/projects/:projectId', component: AfficherProjetComponent
    // },

    // {
    //   path: 'taches/edit/:tacheId/projects/:projectId', component: AfficherProjetComponent
    // },

    
    ]},
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
