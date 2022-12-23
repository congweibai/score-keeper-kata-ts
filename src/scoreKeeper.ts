import { formatTeamScore } from './helpers/numberConvertor';

const DEFAULT_SCORE = 0;
export class ScoreKeeper {
  private readonly teamAScore: number;
  private readonly teamBScore: number;

  constructor(teamAScore?: number, teamBScore?: number) {
    this.teamAScore = teamAScore ?? DEFAULT_SCORE;
    this.teamBScore = teamBScore ?? DEFAULT_SCORE;
  }

  getScore(): string {
    const teamAScore = formatTeamScore(this.teamAScore);
    const teamBScore = formatTeamScore(this.teamBScore);
    return teamAScore + ':' + teamBScore;
  }
}
