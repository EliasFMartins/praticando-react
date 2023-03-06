import './styles.css';
export const PostsCard = ({title, cover,body,id}) => {
  return (
    <div className="card-content">
          <img src={cover} alt='foto'/>
         <div className="card" key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
          </div>
         </div>
  )
}