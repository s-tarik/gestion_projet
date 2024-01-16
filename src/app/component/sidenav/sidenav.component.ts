import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
          style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
        keyframes([
          style({tansform: 'rotate(0deg)', offset: '0'}),
          style({tansform: 'rotate(2turn)', offset: '1'})
        ])
      )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  authUser: any

 constructor( private authService: AuthService, private router : Router){}
 ngOnInit(): void {
  this.authUser = localStorage.getItem("authUser")
  
 }

 navigateToProjects() {
  this.router.navigate(['projects']);
 }

 logOut(): void {
  this.authService.removeToken();
  this.router.navigateByUrl("/login");
}

}
