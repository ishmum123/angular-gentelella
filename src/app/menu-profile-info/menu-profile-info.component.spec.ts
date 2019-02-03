import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProfileInfoComponent } from './menu-profile-info.component';

describe('MenuProfileInfoComponent', () => {
  let component: MenuProfileInfoComponent;
  let fixture: ComponentFixture<MenuProfileInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuProfileInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
