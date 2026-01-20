import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ServiceModernization} from './service-modernization';

describe('ServiceModernization', () => {
  let component: ServiceModernization;
  let fixture: ComponentFixture<ServiceModernization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceModernization]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceModernization);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
