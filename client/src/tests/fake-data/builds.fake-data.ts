import { Build, BuildStatus } from '../../../../types/Build';

export const buildsData: Build[] = [
  {
    id: '1855b36b5-27ea-4da4-bf53-c2d933e036ca',
    configurationId: '2855b36b5-27ea-4da4-bf53-c2d933e036ca',
    commitMessage: 'fix: (client) create Build component',
    status: BuildStatus.Success,
    buildNumber: 1,
    authorName: 'MOTORIST',
    branchName: 'test-repo',
    commitHash: 'asdsdfd',
    start: '2020-03-20T22:39:36.2',
    duration: 60,
  },
  {
    id: '2855b36b5-27ea-4da4-bf53-c2d933e036ca',
    commitMessage: 'fix: (client) create Build component',
    configurationId: '1855b36b5-27ea-4da4-bf53-c2d933e036ca',
    status: BuildStatus.Fail,
    buildNumber: 2,
    authorName: 'MOTORIST',
    branchName: 'test-repo',
    commitHash: 'asdsdfd',
    start: '2020-03-20T22:39:36.2',
    duration: 60,
  },
  {
    id: '3855b36b5-27ea-4da4-bf53-c2d933e036ca',
    configurationId: '1855b36b5-27ea-4da4-bf53-c2d933e036ca',
    commitMessage: 'fix: (client) create Build component',
    status: BuildStatus.Waiting,
    buildNumber: 3,
    authorName: 'MOTORIST',
    branchName: 'test-repo',
    commitHash: 'asdsdfd',
    start: '2020-03-20T22:39:36.2',
    duration: 60,
  },
];

export const buildsDataObject = buildsData.reduce((obj: Record<string, any>, build) => {
  obj[build.id] = build;
  return obj;
}, {});
