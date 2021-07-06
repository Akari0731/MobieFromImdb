import React from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Details } from './details';
import { SearchTvShowByWord }from './searchTvShowByWord';
import { TVShow, getEpisodesByTitle } from '../server/api';
import { makeStyles } from '@material-ui/core/styles';
import FilmImage from '../assets/film.jpg';

const useStyles = makeStyles(() => ({
  baseContainer: {
    margin: '48px 16px'
  },
  container: {
  	display: 'flex',
  	flexDirection: 'column',
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  results: {
  	display: 'flex',
  },
  texts: {
  	marginLeft: '24px'
  },
}));

export const App: React.FunctionComponent = () => {
	const classes = useStyles();
	const [loading, setLoading] = React.useState<boolean>(false);
	const [error, setError] = React.useState<boolean>(false);
	const [searchWord, setSearchWord] = React.useState('Silicon Valley');
	const [tvShow, setTvShow] = React.useState<TVShow | undefined>();

	const onSearchTvShow = async () => {
		setLoading(true);
		getEpisodesByTitle(searchWord, setTvShow, setError);
		setLoading(false);
	}

	React.useEffect(() => {
		onSearchTvShow();
	}, []);

	return (
		<div className={classes.baseContainer}>
			{error && <Typography variant="h5">Got an error....</Typography>}
			{loading || !tvShow ? (
				<>
					<Typography variant="h5">loading.....</Typography>
					<CircularProgress />
				</>
				) : (
				<div className={classes.container}>
					<Typography variant="h2">Search Moviews from IMDB!</Typography>
					<SearchTvShowByWord setSearchWord={setSearchWord} onSearchTvShow={onSearchTvShow} />
					{tvShow.Response === "True" ? (
						<div className={classes.results}>
							<img height="320px" src={tvShow.Poster ? tvShow.Poster : FilmImage} alt="posterImage" />
							<div className={classes.texts}>
								<Details detailsTitle="Title" detailsDescription={tvShow.Title ? tvShow.Title : "N/A"} />
								<Details detailsTitle="Plot" detailsDescription={tvShow.Plot ? tvShow.Plot : "N/A"} />
								<Details detailsTitle="Writer" detailsDescription={tvShow.Writer ? tvShow.Writer : "N/A"} />
								<Details detailsTitle="Director" detailsDescription={tvShow.Director ? tvShow.Director : "N/A"} />
								<Details detailsTitle="Actors" detailsDescription={tvShow.Actors ? tvShow.Actors : "N/A"} />
								<Details detailsTitle="IMDB rating" detailsDescription={tvShow.imdbRating ? tvShow.imdbRating : "N/A"} />
								<Details detailsTitle="Awards" detailsDescription={tvShow.Awards ? tvShow.Awards : "N/A"} />
							</div>
						</div>
					) : (
						<Typography variant="h5">Got an error says "{tvShow.Error}"</Typography>
					)}
				</div>
			)}
		</div>
		);
};