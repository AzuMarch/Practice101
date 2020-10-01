import React, {useState} from 'react';
import styles from './index.module.scss';
import Button from 'components/Button';

const Counter = () => {
    const [value, setValue] = useState(0);
    const [delta, setDelta] = useState(0);
    
    const handleValueChange = (type) => {
        if (delta) {
            setValue((type === 'add'? 1: -1) * delta + value);
            setDelta(0);
        }
    }

    return (
        <div className={styles.Counter}>
            <h1>This is a counter</h1>
            <h2>Value: {Number(value)}</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="number" onChange={(e) => {
                    setDelta(Number(e.target.value));
                }} value={delta} />
                <Button color="Primary" onClick={() => handleValueChange('add')}>Add</Button>
                <Button color="Secondary" onClick={() => handleValueChange('minus')}>Subtract</Button>
            </form>
        </div>
    )
}

export default Counter;
