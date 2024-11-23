import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionnelComponent } from './profesionnel.component';

describe('ProfesionnelComponent', () => {
  let component: ProfesionnelComponent;
  let fixture: ComponentFixture<ProfesionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfesionnelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfesionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
