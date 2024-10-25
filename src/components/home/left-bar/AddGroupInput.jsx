import { useEffect, useState, useContext, useRef } from 'react';
import PlusSign from '../../../assets/svg/black-plus-sign.svg';

import { PLUS_SIGN_ALTERNATE_LABEL } from '../../../constants/alternate-labels';

import styles from '../../../styles/AddGroupInput.module.css';
import { useAddGroupMutation } from '../../../store';
import { Button } from 'react-bootstrap';
import LeftBarContext from '../../../context/left-bar';

const AddGroupInput = () => {
    const {formMode, toggleFormMode, toggleActiveGroup} = useContext(LeftBarContext);

    const [addGroup, {isLoading: addGroupLoading}] = useAddGroupMutation();

    const [name, setName] = useState('');

    const formRef = useRef();

    const handleClick = () => {
        toggleFormMode(true);
    }

    const handleNameChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name !== '') {
            try {
                await addGroup(name).unwrap();
                toggleFormMode(false);
                toggleActiveGroup(name);
                setName('');
            } catch (error) {
                throw new Error(error);
            }
        }
    }

    useEffect(() => {
        if (!formMode) {
            setName('');
        }
    }, [formMode])

    useEffect(() => {
		const handleKeyDown = event => {
			if (event.key === 'Escape') {
				toggleFormMode(false);
				setName('');
			}
		};

        const handleClickOutside = event => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                toggleFormMode(false);
                setName('');
            }
        }
		window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('mousedown', handleClickOutside);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

    if (!formMode) {
        return (
            <div className={styles['add-group-input']} onClick={handleClick}>
                <div className={styles['icon-box']}>
                    <img className={styles.icon} src={PlusSign} alt={PLUS_SIGN_ALTERNATE_LABEL}/>
                </div>
                <span className={styles.label}>Add Group</span> 
            </div>)
    } else {
        return (
            <form ref={formRef} className={styles['add-group-input']} onSubmit={handleSubmit}>
                <div className={styles['icon-box']}>
                    <img className={styles.icon} src={PlusSign} alt={PLUS_SIGN_ALTERNATE_LABEL}/>
                </div>
                <input type='text' value={name} onChange={handleNameChange} autoFocus className={styles.input} maxLength={15} minLength={3} />
                <button type='submit' style={{ opacity: '0'}}></button>
            </form>)
    }
    
}

export default AddGroupInput;