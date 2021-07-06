import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  searchTvShowByWord: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '80%',
    margin: '24px 16px'
  },
  textField: {
  	marginRight: '12px',
  	width: '50%'
  }
}));

interface SearchTvShowByWordProps {
	setSearchWord: (word: string) => void;
	onSearchTvShow(): void;
}

export const SearchTvShowByWord: React.FunctionComponent<SearchTvShowByWordProps> = ({setSearchWord, onSearchTvShow}) => {
	const classes = useStyles();

	return (
		<div className={classes.searchTvShowByWord}>
			<TextField className={classes.textField} type="text" name="title" label="TV show title" onChange={(event) => setSearchWord(event.target.value)} />
			<Button name="searchButton" type="button" variant="contained" color="primary" onClick={onSearchTvShow}>
			  Search tv show by title
			</Button>
		</div>
	);
};
