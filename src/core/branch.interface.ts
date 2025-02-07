export type StoryBranch = {
  id: string;
  setup: string;
  choices: string[];
  outcome: string;
  lastBranchId: string;
  depth: number;
};
