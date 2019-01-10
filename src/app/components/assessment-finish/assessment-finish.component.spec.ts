import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentFinishComponent } from './assessment-finish.component';

describe('AssessmentFinishComponent', () => {
  let component: AssessmentFinishComponent;
  let fixture: ComponentFixture<AssessmentFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
