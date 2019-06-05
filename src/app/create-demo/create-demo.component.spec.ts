import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDemoComponent } from './create-demo.component';

describe('CreateDemoComponent', () => {
  let component: CreateDemoComponent;
  let fixture: ComponentFixture<CreateDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
