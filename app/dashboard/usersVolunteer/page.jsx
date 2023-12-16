import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Link from "next/link";
import Image from "next/image";
import { fetchUsersVol } from "@/app/lib/data";

const UsersVolunteerPage = async ({ searchParams }) => {

    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const { count, users } = await fetchUsersVol(q, page);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a volunteer..." />

            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Volunteer Name</td>
                        <td>Registration Date</td>
                        <td>District Date</td>
                        <td>Association</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <div className={styles.user}>
                                    <Image
                                        src={user.img || "/noavatar.png"}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className={styles.userImage}
                                    />
                                    {user.volunteername}
                                </div>
                            </td>
                            <td>{user.registrationdate.toString().slice(4, 16)}</td>
                            <td>{user.district}</td>
                            <td>{user.association}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/dashboard/users/${user.id}`}>
                                        <button className={`${styles.button} ${styles.view}`}>
                                            View
                                        </button>
                                    </Link>
                                    <button className={`${styles.button} ${styles.delete}`}>
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    );
};

export default UsersVolunteerPage