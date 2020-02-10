import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Paper, Typography, ButtonBase } from '@material-ui/core/';
import { IMailProps } from './../interfaces/IMailProps';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			margin: '1rem auto'
		},
		paper: {
			padding: theme.spacing(2),
			margin: 'auto',
			maxWidth: 500
		},
		image: {
			width: 128,
			height: 128
		},
		img: {
			margin: 'auto',
			display: 'block',
			maxWidth: '100%',
			maxHeight: '100%'
		}
	})
);

export function MailComponent(props: IMailProps) {
	const classes = useStyles();
	const { logo, mail }: IMailProps = props;
	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Grid container spacing={2}>
					<Grid item>
						<ButtonBase className={classes.image}>
							<img className={classes.img} alt="complex" src={logo} />
						</ButtonBase>
					</Grid>
					<Grid item xs={12} sm container>
						<Grid item xs container direction="column" spacing={2}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1">
									{mail.username}
								</Typography>
								<Typography variant="body2" gutterBottom>
									Full resolution 1920x1080 • JPEG
								</Typography>
								<Typography variant="body2" color="textSecondary">
									{mail.username}
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="body2" style={{ cursor: 'pointer' }}>
									Remove
								</Typography>
							</Grid>
						</Grid>
						<Grid item>
							<Typography variant="subtitle1">{mail.username}</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}
