import axios from 'axios';
import APIError from '../helpers/APIError';

const httpApi = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 3000,
});

interface Repo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
}

export async function getRepo(ownerAndRepoName: string): Promise<Repo> {
  try {
    const { data } = await httpApi.get(`repos/${ownerAndRepoName}`);
    return data;
  } catch ({ stack }) {
    throw new APIError({ message: 'Failed to get repository information from github.com', stack });
  }
}

export async function checkRepo(ownerAndRepoName: string): Promise<boolean> {
  try {
    const { status } = await httpApi.get(`repos/${ownerAndRepoName}`);

    if (status !== 200) {
      return false;
    }

    return true;
  } catch ({ stack }) {
    throw new APIError({ message: 'Failed to check repository from github.com', stack });
  }
}

export default {
  getRepo,
  checkRepo,
};
