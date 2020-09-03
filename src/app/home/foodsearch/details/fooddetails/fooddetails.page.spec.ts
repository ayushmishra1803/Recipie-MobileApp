import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FooddetailsPage } from './fooddetails.page';

describe('FooddetailsPage', () => {
  let component: FooddetailsPage;
  let fixture: ComponentFixture<FooddetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooddetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FooddetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
