import styles from './Sidebar.module.css';

function Sidebar({ children, position = 'left' }) {
    return (
        <aside className={`${styles.sidebar} ${styles[position]}`}>
            {children}
        </aside>
    );
}

export default Sidebar;