import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNavBarComponent } from './phone-nav-bar.component';

describe('PhoneNavBarComponent', () => {
    let component: PhoneNavBarComponent;
    let fixture: ComponentFixture<PhoneNavBarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PhoneNavBarComponent]
        });
        fixture = TestBed.createComponent(PhoneNavBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
