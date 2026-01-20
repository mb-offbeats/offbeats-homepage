import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDevelopment } from './service-development';

describe('ServiceDevelopment', () => {
  let component: ServiceDevelopment;
  let fixture: ComponentFixture<ServiceDevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDevelopment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDevelopment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
