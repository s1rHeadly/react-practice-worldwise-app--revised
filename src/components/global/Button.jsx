
import styles from './Button.module.css';

const Button = ({children, type, selected, onClick}) => {
  return (
    <button
    onClick={onClick}
    selected={selected}
    type={type || 'button'}
    className={`${styles.btn} ${styles[selected]}`}
    >
      {children}
    </button>
  )
}

export default Button