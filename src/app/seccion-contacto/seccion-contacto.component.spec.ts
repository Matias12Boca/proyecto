import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionContactoComponent } from './seccion-contacto.component';

describe('SeccionContactoComponent', () => {
  let component: SeccionContactoComponent;
  let fixture: ComponentFixture<SeccionContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
