import { ScoreKeeper } from './scoreKeeper';

describe('getScores', () => {
  test('set up ScoreKeeper and getScores', () => {
    const scoreKeeper = new ScoreKeeper();
    expect(scoreKeeper.getScore()).toEqual('000:000');
  });

  test('set up ScoreKeeper and getScores', () => {
    const scoreKeeper = new ScoreKeeper(1, 10);
    expect(scoreKeeper.getScore()).toEqual('001:010');
  });

  test('set up ScoreKeeper and getScores', () => {
    const scoreKeeper = new ScoreKeeper(19, 10);
    expect(scoreKeeper.getScore()).toEqual('019:010');
  });

  test('set up ScoreKeeper and getScores', () => {
    const scoreKeeper = new ScoreKeeper(190, 10);
    expect(scoreKeeper.getScore()).toEqual('190:010');
  });
});

describe('scoreTeams', () => {
  test('scoreTeamA only', () => {
    const scoreKeeper = new ScoreKeeper();
    expect(scoreKeeper.getScore()).toEqual('000:000');

    scoreKeeper.scoreTeamA1();
    expect(scoreKeeper.getScore()).toEqual('001:000');

    scoreKeeper.scoreTeamA3();
    expect(scoreKeeper.getScore()).toEqual('004:000');

    scoreKeeper.scoreTeamA3();
    expect(scoreKeeper.getScore()).toEqual('007:000');
  });

  test('scoreTeamB only', () => {
    const scoreKeeper = new ScoreKeeper(1, 10);
    expect(scoreKeeper.getScore()).toEqual('001:010');

    scoreKeeper.scoreTeamB1();
    expect(scoreKeeper.getScore()).toEqual('001:011');

    scoreKeeper.scoreTeamB2();
    expect(scoreKeeper.getScore()).toEqual('001:013');

    scoreKeeper.scoreTeamB3();
    expect(scoreKeeper.getScore()).toEqual('001:016');
  });

  test('scoreTeamA and scoreTeamB', () => {
    const scoreKeeper = new ScoreKeeper(19, 10);
    expect(scoreKeeper.getScore()).toEqual('019:010');

    scoreKeeper.scoreTeamB1();
    expect(scoreKeeper.getScore()).toEqual('019:011');

    scoreKeeper.scoreTeamB2();
    expect(scoreKeeper.getScore()).toEqual('019:013');

    scoreKeeper.scoreTeamA2();
    expect(scoreKeeper.getScore()).toEqual('021:013');

    scoreKeeper.scoreTeamA1();
    expect(scoreKeeper.getScore()).toEqual('022:013');

    scoreKeeper.scoreTeamA1();
    expect(scoreKeeper.getScore()).toEqual('023:013');

    scoreKeeper.scoreTeamB3();
    expect(scoreKeeper.getScore()).toEqual('023:016');
  });
});
