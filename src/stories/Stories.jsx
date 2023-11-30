import "./stories.scss"


export const Stories = () => {

//temporary

const stories =[
    {
        id: 1,
        name: "jane doe",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        name: "sandra paul",
        img: "https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        name: "kim harry",
        img: "https://images.unsplash.com/photo-1597633125097-5a9961e1f03d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        name: "jenny johnson",
        img: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },


];

  return (
    <div className="stories">
 <div className="story">
              <img src="https://images.unsplash.com/photo-1531727991582-cfd25ce79613?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />  
                <span>jane Doe</span>
                <button>+</button>
            </div>

        {stories.map(story=>(
            <div className="story" key={story.id}>
                <img src={story.img} alt={story.name} />
                <span>{story.name}</span>
            </div>
        ))}

    </div>
  )
}
