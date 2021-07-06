import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  detailsContainer: {
    display: 'flex',
    alignItems: 'baseline',
    margin: '8px 0'
  },
  marginRight: {
  	marginRight: '12px'
  }
}));

interface DetailsProps {
	detailsTitle: string;
	detailsDescription: string;
}

export const Details: React.FunctionComponent<DetailsProps> = ({detailsTitle, detailsDescription}) => {
	const classes = useStyles();

	return (
		<div className={classes.detailsContainer}>
			<Typography variant="h5" className={classes.marginRight}>{detailsTitle}:</Typography>
			<Typography variant="h6">{detailsDescription}</Typography>
		</div>
	);
}