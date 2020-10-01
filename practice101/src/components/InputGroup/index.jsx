import React from 'react';
import styles from './index.module.scss';

const InputGroup = ({title, type, initValue, onChange}) => {

    return (
        <div className={styles.inputGroup}>
            <label htmlFor={title}>{title}</label>
            <input
                type={type}
                onChange={(e) => onChange(e.target.value)}
                value={initValue}
             />
        </div>
    )
}

export default InputGroup;