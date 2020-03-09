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

  });


  // integration-testing: testing properyt bindings
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

// integration-testing: testing class bindings
  it('should highlight the upvote button if I have upvoted', () => {
      component.myVote = 1;
      fixture.detectChanges();
      
      let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
      
      // indexer syntax to access the higlighted property
      expect(de.classes['highlighted']).toBeTruthy();

  });

 
  // integration-testing: testing event bindings
  it('should increase total votes when I click the upvote button', () => {

    // refference to the dom element
    let button =  fixture.debugElement.query(By.css('.glyphicon-menu-up'));    
    
    // triggering event handler on button passing in the eventType & event object/null
    button.triggerEventHandler('click', null); 
  
    expect(component.totalVotes).toBe(1);

  });
  
});
