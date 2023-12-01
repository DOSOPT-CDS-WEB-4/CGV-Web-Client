import { apiResponse } from '../types/axios';
import { movieInfoTypes } from '../types/movieInfo';
import { api } from './axios';

export const getMovieInfoData = async () => {
    try {
        const { data } = await api.get<apiResponse<Array<movieInfoTypes>>>('/movie');
        return { data: data.data, isError: false };
    } catch (err) {
        return { isError: true }; 
    }
};
