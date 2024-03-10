import styles from "./footer.module.css";

export default function Footer() {
    return (
    <section className={`${styles.bg}`}>
        <p>Find an issue with this page? Fix it on GitHub</p>
        <hr className={`mx-auto ${styles.hr2} d-flex justify-content-center`} />
        <p>Copyright ©️ 2023 Mental health. All rights reserved.</p>
        <hr className={`mx-auto ${styles.hr2} d-flex justify-content-center`} />
        <p>Privacy & Terms</p>
    </section>
    )
}