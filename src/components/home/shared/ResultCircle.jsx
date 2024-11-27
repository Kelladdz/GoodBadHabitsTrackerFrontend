import { useContext, useEffect, useState } from 'react';

import styles from '../../../styles/ResultCircle.module.css';

const ResultCircle = ({status}) => {
    const [backgroundColor, setBackgroundColor] = useState('transparent');

    useEffect(() => {
        switch (status) {
            case 0:
                setBackgroundColor('green');
                break;
            case 1:
                setBackgroundColor('red');
                break;
            case 2:
                setBackgroundColor('yellow');
                break;
            default:
                setBackgroundColor('transparent');
                break;
        }
    },[status]);

    return (
        <div className={styles['result-circle']} style={{backgroundColor: backgroundColor}}></div>
    );
}

export default ResultCircle;