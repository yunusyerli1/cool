import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulUsageComponent } from './modul-usage.component';

describe('ModulUsageComponent', () => {
  let component: ModulUsageComponent;
  let fixture: ComponentFixture<ModulUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulUsageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
