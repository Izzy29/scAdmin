import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import Image from "next/image";

import {
    MdDashboard,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
    MdAnnouncement,
} from "react-icons/md";

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />,
            },
            {
                title: "List of Registered Vendor",
                path: "/dashboard/usersVendor",
                icon: <MdPeople />,
            },
            {
                title: "List of Registered Volunteer",
                path: "/dashboard/usersVolunteer",
                icon: <MdPeople />,
            },
            {
                title: "Announcement",
                path: "/dashboard/announcement",
                icon: <MdAnnouncement />,
            },
        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Reports",
                path: "/dashboard/report",
                icon: <MdAnalytics />,
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />,
            },
        ],
    },
];

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50" />
                <div className={styles.userDetail}>
                    <span className={styles.username}>Muhamad Izrin</span>
                    <span className={styles.userTitle}>System Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map(item => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>

            <button className={styles.logout}>
                <MdLogout />
                Logout
            </button>

        </div>
    )
}

export default Sidebar