import { TestBed, ComponentFixture } from '@angular/core/testing';
import { VoterComponent } from './voter.component';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>   // ComponentFixture wrapper around component
   
  beforeEach(() => {
    // angular must create instance of component; as dynamic testing module
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    // fixture.nativeElement
    // fixture.debugElement

  });

  it('it should render togtal votes', () => {
    // arrange
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();
    
    // act
    /* creating a wrapper around the native html element */
    // fixture.debugElement.queryAll(By.css('.vote-count'))
    // fixture.debugElement.query(By.directive(VoterComponent))
    let de = fixture.debugElement.query(By.css('.vote-count'));     // de  - debugElement
    let el: HTMLElement = de.nativeElement;
     
    // asert
    expect(el.innerText).toContain('21');   

  });


  it('should highlight the upvote button if I have upvoted', () => {
      component.myVote = 1;
      fixture.detectChanges();
      
      let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
      
      // indexer syntax to access the higlighted property
      expect(de.classes['highlighted']).toBeTruthy();

  });
  
});
