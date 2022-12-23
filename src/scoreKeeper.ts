import { formatTeamScore } from './helpers/numberConvertor';

const DEFAULT_SCORE = 0;
export class ScoreKeeper {
  private teamAScore: number;
  private teamBScore: number;

  constructor(teamAScore?: number, teamBScore?: number) {
    this.teamAScore = teamAScore ?? DEFAULT_SCORE;
    this.teamBScore = teamBScore ?? DEFAULT_SCORE;
  }

  getScore(): string {
    const teamAScore = formatTeamScore(this.teamAScore);
    const teamBScore = formatTeamScore(this.teamBScore);
    return teamAScore + ':' + teamBScore;
  }

  scoreTeamA1(): void {
    this.teamAScore = this.teamAScore + 1;
  }

  scoreTeamA2(): void {
    this.teamAScore = this.teamAScore + 2;
  }

  scoreTeamA3(): void {
    this.teamAScore = this.teamAScore + 3;
  }

  scoreTeamB1(): void {
    this.teamBScore = this.teamBScore + 1;
  }

  scoreTeamB2(): void {
    this.teamBScore = this.teamBScore + 2;
  }

  scoreTeamB3(): void {
    this.teamBScore = this.teamBScore + 3;
  }
}
