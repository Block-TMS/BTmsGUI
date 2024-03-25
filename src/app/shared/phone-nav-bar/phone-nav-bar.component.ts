import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-phone-nav-bar',
    templateUrl: './phone-nav-bar.component.html',
    styleUrls: ['./phone-nav-bar.component.scss']
})
export class PhoneNavBarComponent {


  constructor(private router: Router) {
  }

  public navigateTo(route: string) {
    console.log(route);
    this.router.navigate([route]);
  }
}
