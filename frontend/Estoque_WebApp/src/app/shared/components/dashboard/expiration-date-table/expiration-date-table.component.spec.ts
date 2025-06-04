import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpirationDateTableComponent } from './expiration-date-table.component';

describe('ExpirationDateTableComponent', () => {
  let component: ExpirationDateTableComponent;
  let fixture: ComponentFixture<ExpirationDateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpirationDateTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpirationDateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
