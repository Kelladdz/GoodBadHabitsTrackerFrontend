import styles from '../../../styles/HeaderButton.module.css'

const HeaderButton = ({icon, alt, onClick}) => {
    return (
        <button className={styles['header-button']} onClick={onClick}>
            <img src={icon} alt={alt}/>
        </button>
    )
}

export default HeaderButton;