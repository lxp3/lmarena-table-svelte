export interface ModelData {
    rank: number;
    name: string;
    overall: number;
    expert: number;
    hard: number;
    coding: number;
    math: number;
    creative: number;
    instruction: number;
    longer: number;
    logo?: string;
}

export const leaderboardData: ModelData[] = [
    { rank: 1, name: "gemini-3-pro", overall: 1, expert: 3, hard: 1, coding: 3, math: 2, creative: 1, instruction: 3, longer: 3 },
    { rank: 2, name: "gemini-3-flash", overall: 2, expert: 7, hard: 5, coding: 8, math: 3, creative: 2, instruction: 6, longer: 6 },
    { rank: 3, name: "grok-4.1-thinking", overall: 3, expert: 9, hard: 4, coding: 6, math: 9, creative: 10, instruction: 12, longer: 15 },
    { rank: 4, name: "claude-opus-4-5-202...", overall: 4, expert: 2, hard: 2, coding: 1, math: 7, creative: 5, instruction: 1, longer: 2 },
    { rank: 5, name: "claude-opus-4-5-202...", overall: 5, expert: 1, hard: 3, coding: 4, math: 6, creative: 3, instruction: 2, longer: 1 },
    { rank: 6, name: "grok-4.1", overall: 6, expert: 10, hard: 9, coding: 13, math: 19, creative: 15, instruction: 17, longer: 13 },
    { rank: 7, name: "gemini-3-flash (thi...", overall: 7, expert: 12, hard: 7, coding: 10, math: 4, creative: 8, instruction: 11, longer: 8 },
    { rank: 8, name: "gpt-5.1-high", overall: 8, expert: 8, hard: 11, coding: 14, math: 15, creative: 11, instruction: 9, longer: 11 },
    { rank: 9, name: "gemini-2.5-pro", overall: 9, expert: 14, hard: 15, coding: 24, math: 11, creative: 4, instruction: 18, longer: 10 },
    { rank: 10, name: "claude-sonnet-4-5-2...", overall: 10, expert: 4, hard: 6, coding: 2, math: 8, creative: 9, instruction: 4, longer: 4 },
];
