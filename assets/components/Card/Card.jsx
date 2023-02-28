import style from "./Card.module.css";
import { AiOutlineMessage,AiOutlineHeart,AiOutlineShareAlt} from "react-icons/ai";
export function Card(props) {
  const {} = props
  return (
    <div className={style.content}>
      <img
        className={style.photoTop}
        src="https://images.unsplash.com/photo-1677126123251-f269246095f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <img
        className={style.profile}
        src="https://avatars.githubusercontent.com/u/105609179?v=4"
      />
      <h2>Elias F. Martins</h2>
      <h4>Web Developer</h4>
      <a href="#"> Editar</a>
     
    </div>
  );
}
