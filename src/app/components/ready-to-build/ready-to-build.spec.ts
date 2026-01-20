import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyToBuild } from './ready-to-build';

describe('ReadyToBuild', () => {
  let component: ReadyToBuild;
  let fixture: ComponentFixture<ReadyToBuild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadyToBuild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadyToBuild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
