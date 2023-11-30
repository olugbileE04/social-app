import "./comments.scss"

export const Comments = () => {

//temporary

const comments =[
    {
        id: 1,
        name: "kelly simon",
        userId:1,
        profilePic:"https://images.unsplash.com/photo-1521252659862-eec69941b071?q=80&w=1850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB",
        desc:"Lorem ipsum dolor sit,  amet consectetur adipisicing elit. Consectetur error unde harum omnis.",
       
    },
    {
        id: 2,
        name: "peter paul",
        userId:2,
        profilePic:"https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"Tempora harum, nihil odit laudantium, quaerat fuga incidunt neque itaque nisi,  amet consectetur adipisicing elit. Consectetur error unde harum omnis.",
    },
    {
        id: 3,
        name: "james harry",
        userId:3,
        profilePic:"https://images.unsplash.com/photo-1559582930-bb01987cf4dd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:" ipsum tenetur cupiditate excepturi voluptatibus amet!   amet consectetur adipisicing elit. Consectetur error unde harum omnis.",
        
    },
    {
        id: 4,
        name: "jenny johnson",
        userId:4,
        profilePic:"https://images.unsplash.com/photo-1606914707708-5180546f153d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"   amet consectetur adipisicing elit. Consectetur error unde harum omnis.   amet consectetur adipisicing elit. Consectetur error unde harum omnis.",
        
    },


];

  return (
    <div className="comments">
        <div className="write">
            <img src="https://images.unsplash.com/photo-1531727991582-cfd25ce79613?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <input type="text" placeholder="Write a comment..." />
            <button>send</button>
        </div>
        {comments.map(comment=>(
            <div className="comment">
                <img src={comment.profilePic} alt=""/>
                
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
        ))}
    </div>
  )
}
