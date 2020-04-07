import axios from './axios';

export const getBuilds = (offset, limit) => axios.get('builds', {params: { offset, limit }});

export const getBuild = id => axios.get(`builds/${id}`);

export const runBuild = commitHash => axios.post(`builds/${commitHash}`);

export const getBuildLogs = buildId => axios.get(`builds/${buildId}/logs`);