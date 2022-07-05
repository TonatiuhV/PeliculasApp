import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Cast, CreditsResponse } from "../interfaces/cretisInterface";
import {MovieFull} from "../interfaces/movieInterface";

interface MovieDatails {
    isLoading:boolean;
    movieFull:MovieFull|undefined;
    cast:Cast[];
}

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDatails>({
        isLoading:true,
        movieFull:undefined,
        cast:[]
    });

    const getMoviesDetails = async () =>{
        const movieDatailsPromise =  movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise =  movieDB.get<CreditsResponse>(`/${movieId}/credits`);
        
        const [ movieDetailsResp, castPromiseResp] = await Promise.all([
                    movieDatailsPromise,
                    castPromise
                ]);
        setState({
            isLoading:false,
            movieFull:movieDetailsResp.data,
            cast:castPromiseResp.data.cast
        })

    }

    useEffect(() => {
        getMoviesDetails();
    }, []);

    return {
        ...state
    }



}
