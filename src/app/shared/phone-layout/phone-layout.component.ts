import {Component, Input} from "@angular/core";

@Component({
    selector: 'app-phone-layout',
    templateUrl: './phone-layout.component.html',
    styleUrls: ['./phone-layout.component.scss']
})
export class PhoneLayoutComponent {
  @Input() loading: boolean = true;
}
