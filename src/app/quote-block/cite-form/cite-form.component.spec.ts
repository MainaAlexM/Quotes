import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiteFormComponent } from './cite-form.component';

describe('CiteFormComponent', () => {
  let component: CiteFormComponent;
  let fixture: ComponentFixture<CiteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
