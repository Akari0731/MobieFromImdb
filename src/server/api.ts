import React from 'react';
import axios from 'axios';

export interface TVShow {
	Title?: string;
	Year?: string;
	Rated?: string;
	Released?: string;
	Runtime?: string;
	Genre?: string;
	Director?: string;
	Writer?: string;
	Actors?: string;
	Plot?: string;
	Language?: string;
	Country?: string;
	Awards?: string;
	Poster?: string;
	Ratings?: Ratings[];
	Metascore?: string;
	imdbRating?: string;
	imdbVotes?: string;
	imdbId?: string;
	Type?: string;
	totalSeasons?: string;
	Response: string;
	Error?: string;
}

interface Ratings {
	Source: string;
	Value: string;
}

export const getEpisodesByTitle = (
	title: string,
	setTvShow:(response: TVShow) => void,
	setError: (isError: boolean) => void
): Promise<void> => {
	const params = { apikey:'d233d117' , t:title};

	return axios.get('https://www.omdbapi.com', {params})
	.then(response => setTvShow(response.data))
	.catch(error => setError(true));
};