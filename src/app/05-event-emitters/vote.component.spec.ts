import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {

  // Arrange
  let component = new VoteComponent();

  beforeEach(() => {
    // setup
    component = new VoteComponent();
  });

  afterEach(() => {
    // tear dopwn
  });
  

  it('should increment totalVotes When upvoted', () => {

       // Act
      component.upVote();

      // Asert
      expect(component.totalVotes).toBe(1);
  });


  it('should decrement totalVotes when downvoted', () => {

      // Act
      component.downVote();

      // Asert
      expect(component.totalVotes).toBe(-1);
  });

  it('should raise voteChanged event when upVoted', () => {

      let totalVotes = null;

      component.voteChanged.subscribe(tv => totalVotes = tv);

      component.upVote();                 // trigger eventEmitter

      expect(totalVotes).not.toBeNull();  // asserting eventEmittet returns Obserbable 

      expect(totalVotes).toBe(1);         // asserting eventEmittet returns Obserbable 
  });

});