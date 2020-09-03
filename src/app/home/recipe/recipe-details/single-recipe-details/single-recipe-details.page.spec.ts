import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleRecipeDetailsPage } from './single-recipe-details.page';

describe('SingleRecipeDetailsPage', () => {
  let component: SingleRecipeDetailsPage;
  let fixture: ComponentFixture<SingleRecipeDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleRecipeDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleRecipeDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
