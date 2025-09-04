import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mobile3Component } from './mobile3.component';

describe('Mobile3Component', () => {
  let component: Mobile3Component;
  let fixture: ComponentFixture<Mobile3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mobile3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mobile3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
