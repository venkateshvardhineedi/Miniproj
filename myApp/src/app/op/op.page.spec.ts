import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OPPage } from './op.page';

describe('OPPage', () => {
  let component: OPPage;
  let fixture: ComponentFixture<OPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
