import axios from './axios';
import { Config } from '../../../types/Config';
import { ApiResponse } from '../types/ApiResponse';

export const getSettings = (): ApiResponse<Config> => axios.get('settings');

export const saveSaveSettings = (data: Config): ApiResponse<Config> => axios.post('settings', data);
