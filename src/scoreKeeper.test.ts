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
