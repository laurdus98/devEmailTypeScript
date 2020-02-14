import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Avatar, Typography } from '@material-ui/core/';
import { IMessaggioProps } from '../interfaces/IMessaggioProps';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			overflow: 'hidden',
			padding: theme.spacing(0, 3)
		},
		paper: {
			maxWidth: 400,
			margin: `${theme.spacing(1)}px auto`,
			padding: theme.spacing(2)
		}
	})
);

export function MessaggioComponent(props: IMessaggioProps) {
	const classes = useStyles();
	const { messaggio }: IMessaggioProps = props;
	const message: string = messaggio.titolo;
	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Grid container wrap="nowrap" spacing={2}>
					<Grid item>
						<Avatar>{messaggio && messaggio.messaggi.username.substr(0, 1)}</Avatar>
					</Grid>
					<Grid item xs zeroMinWidth>
						<Typography noWrap>{message}</Typography>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}
