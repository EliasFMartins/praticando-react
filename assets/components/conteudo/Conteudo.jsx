import styles from "./Conteudo.module.css";
import { AiOutlineMessage,AiOutlineHeart,AiOutlineShareAlt,AiOutlineStar} from "react-icons/ai";
export function Conteudo() {
  return (
    <div className={styles.conteudo}>
      <div className={styles.header}>
        <div className={styles.teste}>
          <img
            className={styles.profile}
            src="https://github.com/annie-n3.png"
          />
          <div>
            <h3>annie-n3</h3>
            <h4>Backend Developer</h4>
          </div>
        </div>
        <div>ha 1 hr atraz</div>
      </div>
      <div>
        <img
          className={styles.post}
          src="https://images.unsplash.com/photo-1677224460986-8cb89dbccab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </div>
      <div className={styles.footer}>
      <div className={styles.btn}>
      <AiOutlineHeart/> <AiOutlineMessage/> <AiOutlineShareAlt/>
      </div>
      <div className={styles.btn}>

      <AiOutlineStar/>
      </div>
      </div>
    </div>
  );
}
