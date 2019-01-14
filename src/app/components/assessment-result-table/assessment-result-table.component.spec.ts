import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentResultTableComponent } from './assessment-result-table.component';

describe('AssessmentResultTableComponent', () => {
  let component: AssessmentResultTableComponent;
  let fixture: ComponentFixture<AssessmentResultTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentResultTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
