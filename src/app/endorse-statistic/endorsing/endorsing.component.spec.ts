/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EndorsingComponent } from './endorsing.component';

describe('EndorsingComponent', () => {
  let component: EndorsingComponent;
  let fixture: ComponentFixture<EndorsingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndorsingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndorsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
