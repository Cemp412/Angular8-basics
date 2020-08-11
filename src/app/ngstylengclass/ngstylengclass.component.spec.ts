import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstylengclassComponent } from './ngstylengclass.component';

describe('NgstylengclassComponent', () => {
  let component: NgstylengclassComponent;
  let fixture: ComponentFixture<NgstylengclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgstylengclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgstylengclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
