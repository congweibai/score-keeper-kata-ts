import { formatTeamScore } from './numberConvertor';

describe('numberConvertor', () => {
  test('1 length number', () => {
    expect(formatTeamScore(1)).toEqual('001');
  });

  test('2 length number', () => {
    expect(formatTeamScore(10)).toEqual('010');
  });

  test('3 length number', () => {
    expect(formatTeamScore(101)).toEqual('101');
  });
});
