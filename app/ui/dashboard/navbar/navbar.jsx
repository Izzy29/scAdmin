"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MdLogout, MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md";
import styles from './navbar.module.css';

const Navbar = () => {
    const pathname = usePathname();
    const [title, setTitle] = useState('');

    useEffect(() => {
        // Your logic to determine the title based on the selection
        const getTitleFromSelection = (selection) => {
            console.log(selection);
            switch (selection) {
                case 'dashboard':
                    return 'Dashboard ';
                case 'usersVendor':
                    return 'List of Registered Vendor';
                case 'usersVolunteer':
                    return 'List of Registered Volunteer';
                case 'announcement':
                    return 'Announcement';
                case 'report':
                    return 'Reports';
                case 'settings':
                    return 'Settings';
                case 'FAQ':
                    return 'Frequent Asked Question (FAQ)';
                default:
                    return 'User Information';
            }
        };

        const currentSelection = pathname.split("/").pop();
        const newTitle = getTitleFromSelection(currentSelection);

        // Update the title state
        setTitle(newTitle);
    }, [pathname]);

    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.menu}>
                <div className={styles.search}>
                    <MdSearch />
                    <input type="text" placeholder="Search..." className={styles.input} />
                </div>
                <div className={styles.icons}>
                    <MdOutlineChat size={20} />
                    <MdNotifications size={20} />
                    <MdPublic size={20} />
                    <MdLogout className={styles.logout} size={20} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
