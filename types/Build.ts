export interface Build {
  id: string;
  configurationId: string;
  buildNumber: number;
  commitMessage: string;
  commitHash: string;
  branchName: string;
  authorName: string;
  status: BuildStatus;
  start: string;
  duration: number;
}

export type BuildStatus = 'Waiting' | 'InProgress' | 'Success' | 'Fail' | 'Canceled';
