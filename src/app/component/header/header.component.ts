import { Component, HostListener, Input, OnInit } from '@angular/core';
import { languages, notifications, userItems } from './header-dummy-data';
import { AuthService } from 'src/app/services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverLay = false;
  selectedLanguage: any;

  languages = languages;
  notifications = notifications;
  userItems = userItems

  constructor(private authService: AuthService, private router : Router) {}

  @HostListener('window:resize', ['$event'])
 onResize(event: any) {
  this.checkCanShowSearchAsOverLay(window.innerWidth);

 }

  ngOnInit(): void {
      this.checkCanShowSearchAsOverLay(window.innerWidth);
      this.selectedLanguage = this.languages[0];
  }

  getHeadClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkCanShowSearchAsOverLay(innerWidth: number): void {
    if(innerWidth < 845) {
      this.canShowSearchAsOverLay = true;
      }else {
        this.canShowSearchAsOverLay = false;
    }
  }

  logOut(): void {
    this.authService.removeToken();
    this.router.navigateByUrl("/login");
  }

}
