import React from 'react';
import styles from './Icon.module.scss';

type sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface IconProps {
	name: string;
	size?: sizes;
	className?: string;
	props?: any;
}

export default function Icon(IconProps: IconProps) {
	const iconProps = { ...IconProps };
	const size = iconProps.size || 'md';
	const classNames =
		`${styles.Icon} ${styles[size]}` +
		(iconProps?.className ? ` ${iconProps.className}` : '');

	const IconSrc = require(`@/icons/${iconProps.name}`).default;

	return (
		<div className={classNames} {...iconProps.props}>
			<IconSrc />
		</div>
	);
}