import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSchemeComponent } from './new-scheme.component';

describe('NewSchemeComponent', () => {
  let component: NewSchemeComponent;
  let fixture: ComponentFixture<NewSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
