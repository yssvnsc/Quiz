import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizInterfaceComponent } from './quiz-interface.component';

describe('QuizInterfaceComponent', () => {
  let component: QuizInterfaceComponent;
  let fixture: ComponentFixture<QuizInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
