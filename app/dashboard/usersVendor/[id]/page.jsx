import styles from '@/app/ui/dashboard/users/singleUserVendor/singleUserVendor.module.css'
import Image from 'next/image'

const SingleUserVendorPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                Muhammad Rafiq

            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="MuhammadRafiq" />
                    <label>Email</label>
                    <input type="email" name="email" placeholder="rafiq@gmail.com" />
                    <label>Password</label>
                    <input type="password" name="password" />
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder="011029384623" />
                    <label>Address</label>
                    <textarea type="text" name="address" placeholder="Kajang, Selangor" />
                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserVendorPage