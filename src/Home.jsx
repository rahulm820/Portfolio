import style from "./portfolio.module.css";

export default function Home() {
    return (
        <>
            <div className={style.navBar}>
    <p className={style.title}>Portfolio</p>
    <ul className={style.navList}>
        <li>Home</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Achievements</li>
    </ul>
</div>

<div className={style.profileSection}>
    <p className={style.name}>Rahul Ajaykumar Madhawani</p>
    <img 
        src="your-image-url.jpg" 
        alt="Rahul's image" 
        className={style.profileImage}
    />
</div>

        </>
    );
}
