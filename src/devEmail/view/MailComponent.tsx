import React, { useState, Fragment } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Paper, Typography, ButtonBase } from '@material-ui/core/';
import { IMailProps } from './../interfaces/IMailProps';
import { MessaggioComponent } from './MessaggioComponent';
import { Messaggio } from './../model/Messaggio';
import { Mail } from '../model/Mail';

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
	const { logo, mail, listaMessaggi }: IMailProps = props;
	const [
		open,
		setOpen
	] = useState(false);

	[
		...listaMessaggi
	].filter((el: Messaggio, i: any): Messaggio | any => {
		const { updateBy }: Mail = mail;
		if (el.messaggi.updateBy === updateBy) {
			return listaMessaggi[i];
		}
		return false;
	});

	return (
		<Fragment>
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
										{mail.updateBy}
									</Typography>
									<Typography variant="body2" gutterBottom>
										Hai parlato con {mail.updateBy}
									</Typography>
									<Typography variant="body2" color="textSecondary">
										{mail.updateBy}
									</Typography>
								</Grid>
								<Grid item>
									<Typography
										variant="body2"
										style={{ cursor: 'pointer' }}
										onClick={() => {
											setOpen(!open);
										}}
									>
										Apri messaggi-mail
									</Typography>
								</Grid>
							</Grid>
							<Grid item>
								<Typography variant="subtitle1">{mail.updateBy}</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</div>
			{open ? (
				<Grid container direction="row" justify="center" alignItems="center">
					Messaggio/i {listaMessaggi.length}
					{listaMessaggi.map((el: Messaggio, i: any) => <MessaggioComponent messaggio={el} key={i} />)}
				</Grid>
			) : (
				''
			)}
		</Fragment>
	);
}
