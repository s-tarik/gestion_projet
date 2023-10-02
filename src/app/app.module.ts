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
import { MediaComponent } from './component/media/media.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { AfficherProjetComponent } from './component/afficher-projet/afficher-projet.component';
import { ListTacheComponent } from './component/afficher-projet/list-tache/list-tache.component';
import { LoginComponent } from './component/login/login.component';
import { UpdateTacheComponent } from './component/update-tache/update-tache.component';
import { RessourcesComponent } from './component/ressources/ressources.component';
import { CommencerComponent } from './component/commencer/commencer.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    HomeComponent,
    LoginComponent,
    ProjectsComponent,
    SettingsComponent,
    MediaComponent,
    DashboardComponent,
    ProjectsListComponent,
    HeaderComponent,
    AfficherProjetComponent,
    ListTacheComponent,
    UpdateTacheComponent,
    RessourcesComponent,
    CommencerComponent
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
    CdkMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
