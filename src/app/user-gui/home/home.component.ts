import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
