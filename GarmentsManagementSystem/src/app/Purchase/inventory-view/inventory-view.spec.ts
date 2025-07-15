import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryView } from './inventory-view';

describe('InventoryView', () => {
  let component: InventoryView;
  let fixture: ComponentFixture<InventoryView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
