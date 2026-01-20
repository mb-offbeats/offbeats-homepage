import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ServiceArchitecture} from './service-architecture';

describe('ServiceArchitecture', () => {
  let component: ServiceArchitecture;
  let fixture: ComponentFixture<ServiceArchitecture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceArchitecture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceArchitecture);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
