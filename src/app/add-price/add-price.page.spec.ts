import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPricePage } from './add-price.page';

describe('AddPricePage', () => {
  let component: AddPricePage;
  let fixture: ComponentFixture<AddPricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPricePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
