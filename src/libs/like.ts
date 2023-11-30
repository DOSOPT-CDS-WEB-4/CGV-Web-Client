import { apiResponse } from "../types/axios";
import { api } from "./axios";

export const patchLikeData = async (movie_id : number) => {
    try{
        const { data } = await api.patch<apiResponse<number>>(`/movie/like/${movie_id}`);
        return { message: data.message, isError: false };
    } catch (err) {
        return { isError: true };
    }
};
