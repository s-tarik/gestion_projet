import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppComponent } from './app.component';
import { BodyComponent } from './component/body/body.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { HomeComponent } from './component/home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SettingsComponent } from './component/settings/settings.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { AfficherProjetComponent } from './component/afficher-projet/afficher-projet.component';
import { ListTacheComponent } from './component/afficher-projet/list-tache/list-tache.component';
import { LoginComponent } from './component/login/login.component';
import { RessourcesComponent } from './component/ressources/ressources.component';
import { CommencerComponent } from './component/commencer/commencer.component';
import { RegisterComponent } from './component/register/register.component';
import { FrogotPasswordComponent } from './component/frogot-password/frogot-password.component';
import { ToDoComponent } from './component/to-do/to-do.component';
import { PlanificationComponent } from './component/planification/planification.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ContactComponent } from './component/contact/contact.component';
import { ProfilUtilisateurComponent } from './component/profil-utilisateur/profil-utilisateur.component';
import { HumainesComponent } from './component/ressources/humaines/humaines.component';
import { MateriellesComponent } from './component/ressources/materielles/materielles.component';
import { FinancieresComponent } from './component/ressources/financieres/financieres.component';
import { ListRessourcesComponent } from './component/ressources/list-ressources/list-ressources.component';
import { ListHumainsComponent } from './component/ressources/humaines/list-humains/list-humains.component';
import { MaterielleListComponent } from './component/ressources/materielles/materielle-list/materielle-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    HomeComponent,
    LoginComponent,
    ProjectsComponent,
    SettingsComponent,
    DashboardComponent,
    ProjectsListComponent,
    AfficherProjetComponent,
    ListTacheComponent,
    RessourcesComponent,
    CommencerComponent,
    RegisterComponent,
    FrogotPasswordComponent,
    ToDoComponent,
    PlanificationComponent,
    ContactComponent,
    ProfilUtilisateurComponent,
    HumainesComponent,
    MateriellesComponent,
    FinancieresComponent,
    ListRessourcesComponent,
    ListHumainsComponent,
    MaterielleListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatSidenavModule,
    FormsModule,
    OverlayModule,
    CdkMenuModule,
    FontAwesomeModule,
    FullCalendarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
