
import profilePic from '../../assets/images/pp.ico';
import styles from './Card.module.css';
export default function Card(){

    return(
        <section>
<div className={styles.card}>
    <img src={profilePic} alt="profile picture" />
    <h2>ᴢᴀʜʀᴀ ᴀɴᴀ</h2>
    <p>I αм α Wєв Dєν Sтυ∂єηт 💻</p>
</div>      
        </section>
    );
}