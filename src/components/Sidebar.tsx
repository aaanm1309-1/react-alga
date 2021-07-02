import { PostObject } from "./Post";

interface SidebarProps {
  post: PostObject
}

export default function Post(props: SidebarProps){
  return <div>
       
    <p>O post do momento é {props.post.title}</p>
  </div>
}