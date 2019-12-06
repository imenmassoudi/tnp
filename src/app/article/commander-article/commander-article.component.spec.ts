import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanderArticleComponent } from './commander-article.component';

describe('CommanderArticleComponent', () => {
  let component: CommanderArticleComponent;
  let fixture: ComponentFixture<CommanderArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommanderArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommanderArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
