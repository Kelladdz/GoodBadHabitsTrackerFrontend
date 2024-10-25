import QuestionMark from '../../../assets/svg/question-mark.svg';

import {HABIT_ICON_ALTERNATE_LABEL} from '../../../constants/alternate-labels';
import { HABIT_ICONS_URLS } from '../../../constants/habit-icons';

import styles from '../../../styles/HabitIcon.module.css';

const HabitIcon = ({icon}) => {
    return (
        <div className={styles['habit-icon']}>
            <img className={styles.icon} src={icon} alt={HABIT_ICON_ALTERNATE_LABEL}/>
        </div>
    )
}

export default HabitIcon;