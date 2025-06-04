import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMovementsTableComponent } from './last-movements-table.component';

describe('LastMovementsTableComponent', () => {
  let component: LastMovementsTableComponent;
  let fixture: ComponentFixture<LastMovementsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastMovementsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastMovementsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
