import { ComponentFixture, TestBed } from '@angular/core/testing';

import { livresListComponent } from './livres-list.component';

describe('livresListComponent', () => {
  let component: livresListComponent;
  let fixture: ComponentFixture<livresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ livresListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(livresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
