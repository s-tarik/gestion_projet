import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { MediaComponent } from './component/media/media.component';
import { SettingsComponent } from './component/settings/settings.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { AfficherProjetComponent } from './component/afficher-projet/afficher-projet.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { ListTacheComponent } from './component/afficher-projet/list-tache/list-tache.component';
import { UpdateTacheComponent } from './component/update-tache/update-tache.component';
import { RessourcesComponent } from './component/ressources/ressources.component';

const routes: Routes = [
  { path:'login', component : LoginComponent},
  {path:'' , component: HomeComponent, 
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

    {
      path:'ressources', component: RessourcesComponent
    },
     
    {
      path:'media', component: MediaComponent
    },

    {
      path:'settings', component: SettingsComponent
    },

    {
      path:'AfficherProjet/:id', component: AfficherProjetComponent
    },
    {
      path:'taches/:id', component: ListTacheComponent
    },

    {
      path:'updatetache/:id', component: UpdateTacheComponent
    },
    
    ]},
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
