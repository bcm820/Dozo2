import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNav2Component } from './main-nav2.component';

describe('MainNav2Component', () => {
  let component: MainNav2Component;
  let fixture: ComponentFixture<MainNav2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNav2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNav2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
