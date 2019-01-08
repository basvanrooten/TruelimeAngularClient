import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentQuizComponent } from './assessment-quiz.component';

describe('AssessmentQuizComponent', () => {
  let component: AssessmentQuizComponent;
  let fixture: ComponentFixture<AssessmentQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
