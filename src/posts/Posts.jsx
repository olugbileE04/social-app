import { Post } from "../components/post/Post";
import "./posts.scss"

export const Posts = () => {

//temporary

const posts =[
    {
        id: 1,
        name: "kelly simon",
        userId:1,
        profilePic:"https://images.unsplash.com/photo-1521252659862-eec69941b071?q=80&w=1850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"Lorem ipsum dolor sit,",
        img: "https://images.unsplash.com/photo-1607749111659-e1c8e05f5f24?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        name: "peter paul",
        userId:2,
        profilePic:"https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"Tempora harum, nihil odit laudantium, quaerat fuga incidunt neque itaque nisi,",
        img: "https://images.unsplash.com/photo-1701226362119-cc86312846af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        name: "james harry",
        userId:3,
        profilePic:"https://images.unsplash.com/photo-1559582930-bb01987cf4dd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:" ipsum tenetur cupiditate excepturi voluptatibus amet!",
        img: "https://images.unsplash.com/photo-1601871925712-3c803d50fa72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        name: "jenny johnson",
        userId:4,
        profilePic:"https://images.unsplash.com/photo-1606914707708-5180546f153d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"   amet consectetur adipisicing elit. Consectetur error unde harum omnis. ",
        img: "https://images.unsplash.com/photo-1630952588640-0204d5d48021?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },


];


  return (
    <div className="posts">
        {posts.map(post=>(
            <Post post={post} key={post.id}/>
        ))}
    </div>
    
  )
}
