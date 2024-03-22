import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
    selector: 'app-scan-qr',
    templateUrl: './scan-qr.component.html',
    styleUrls: ['./scan-qr.component.scss']
})
export class ScanQrComponent {
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
