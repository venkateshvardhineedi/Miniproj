import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloodbankPage } from './bloodbank.page';

describe('BloodbankPage', () => {
  let component: BloodbankPage;
  let fixture: ComponentFixture<BloodbankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodbankPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloodbankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
