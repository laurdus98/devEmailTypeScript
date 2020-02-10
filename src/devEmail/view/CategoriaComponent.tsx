import React from 'react';
import { Grid } from '@material-ui/core';
import { ICategoriaProps } from './../interfaces/ICategoriaProps';

export function CategoriaComponent(props: ICategoriaProps) {
	const { categoria }: ICategoriaProps = props;
	return (
		<Grid container direction="column" justify="flex-start" alignItems="flex-start">
			{categoria.tipo}
		</Grid>
	);
}
