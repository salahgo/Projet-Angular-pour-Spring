import { ComponentFixture, TestBed } from '@angular/core/testing';

import { livreDetailsComponent } from './livre-details.component';

describe('livreDetailsComponent', () => {
  let component: livreDetailsComponent;
  let fixture: ComponentFixture<livreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ livreDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(livreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
