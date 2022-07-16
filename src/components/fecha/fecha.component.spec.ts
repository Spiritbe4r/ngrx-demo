/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FechaComponent } from './fecha.component';

describe('FechaComponent', () => {
  let component: FechaComponent;
  let fixture: ComponentFixture<FechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
