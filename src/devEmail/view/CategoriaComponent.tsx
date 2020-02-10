import React from 'react';
import { Grid } from '@material-ui/core';
import { ICategoriaProps } from './../interfaces/ICategoriaProps';

export function CategoriaComponent(props: ICategoriaProps) {
	const { categoria }: ICategoriaProps = props;
	return (
		<Grid container direction="column-reverse" justify="space-evenly" alignItems="flex-start">
			{categoria.nome}
		</Grid>
	);
}
