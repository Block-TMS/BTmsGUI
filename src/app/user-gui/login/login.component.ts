import { Component } from '@angular/core';
import {FlexModule} from "@angular/flex-layout";
import {SharedModule} from "../../shared/shared.module";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FlexModule,
    SharedModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public isMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Small,
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
