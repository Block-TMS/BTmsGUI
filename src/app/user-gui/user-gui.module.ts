import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserGuiRoutingModule } from './user-gui-routing.module';
import {HomeComponent} from "./home/home.component";
import {SharedModule} from "../shared/shared.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    UserGuiRoutingModule,
    SharedModule,
    FlexLayoutModule,
    HttpClientModule
  ]
})
export class UserGuiModule { }
