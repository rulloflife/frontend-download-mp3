import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootContainerComponent } from './root-container.component';

describe('RootContainerComponent', () => {
  let component: RootContainerComponent;
  let fixture: ComponentFixture<RootContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RootContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
