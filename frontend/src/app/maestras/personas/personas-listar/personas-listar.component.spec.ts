import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasListarComponent } from './personas-listar.component';

describe('PersonasListarComponent', () => {
  let component: PersonasListarComponent;
  let fixture: ComponentFixture<PersonasListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonasListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
