export type PostObject = {
  title:string,
  content:string
}

interface PostProps {
  post: PostObject,
  totalComements?: number 
}

export default function Post(props: PostProps ){
  
  return <div>
    <h1>{props.post.title}</h1>
    <p>{props.post.content}</p>

    { props.totalComements && 
      <span>Comentários: {props.totalComements}</span>
    }
  </div>
}