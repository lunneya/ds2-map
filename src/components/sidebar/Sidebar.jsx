import styles from './Sidebar.module.css';
import { locations } from '../../data/locations.js';

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <h2 className={styles.title}>Locations</h2>
            <ul>
                {locations.map(loc => (
                        <li key={loc.id} className={styles.locationsList}>
                            {loc.name}
                        </li>
                    ))}
            </ul>
        </aside>
    );
}

export default Sidebar;