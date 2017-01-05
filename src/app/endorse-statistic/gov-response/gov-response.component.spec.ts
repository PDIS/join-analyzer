/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GovResponseComponent } from './gov-response.component';

describe('GovResponseComponent', () => {
  let component: GovResponseComponent;
  let fixture: ComponentFixture<GovResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
