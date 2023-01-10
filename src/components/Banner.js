import logo from "../assets/logo.png";
import styles from "../styles/Banner.module.css";

function Banner() {
  const title = "La maison jungle";
  console.log(styles);
  return (
    <div>
      <img src={logo} alt="La maison jungle" className={styles.lmjLogo} />
      <h1 className={styles.lmjBanner}>{title}</h1>
    </div>
  );
}

export default Banner;
