import axios from './axios';

export const getSettings = () => axios.get('settings');

export const saveSaveSettings = data => axios.post('settings', data);