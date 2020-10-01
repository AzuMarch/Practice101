import React from 'react';
import styles from './index.module.scss';

const CheckboxGroup = ({title, checked, onChange}) => {
    return (
        <div className={styles.checkBoxGroup}>
            <label htmlFor={title}>{title}: </label>
            <input
                type="checkbox"
                onChange={() => onChange(title)}
                checked={checked}
             />
        </div>
    )
}

export default CheckboxGroup;
