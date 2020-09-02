import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntryPagesPage } from './entry-pages.page';

describe('EntryPagesPage', () => {
  let component: EntryPagesPage;
  let fixture: ComponentFixture<EntryPagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryPagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntryPagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
