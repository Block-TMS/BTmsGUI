import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopLayoutComponent } from './desktop-layout/desktop-layout.component';
import { PhoneLayoutComponent } from './phone-layout/phone-layout.component';
import { PhoneNavBarComponent } from './phone-nav-bar/phone-nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterLink } from '@angular/router';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
    declarations: [
        DesktopLayoutComponent,
        PhoneLayoutComponent,
        PhoneNavBarComponent
    ],
    exports: [
        DesktopLayoutComponent,
        PhoneNavBarComponent,
        PhoneLayoutComponent
    ],
	imports: [
		CommonModule,
		MatIconModule,
		FlexLayoutModule,
		RouterLink,
		MatProgressSpinnerModule,
	]
})
export class SharedModule { }
