import React from 'react';
import styles from './index.module.scss';

const LinkGroup = ({title, href}) => {
    return (
        <a href={href} className={styles.LinkGroup}>{title}</a>
    )
}

export default LinkGroup;
