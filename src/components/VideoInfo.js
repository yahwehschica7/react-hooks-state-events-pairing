import CommentsCard from "./CommentsCard"
import {useState} from "react"

function VideoInfo({videoData}) {

    const [videoInfo, setVideoInfo] = useState(videoData)
    const [isVisible, setIsVisible] = useState(true)

    function handleLikes() {
        let video = {...videoInfo}
        video.upvotes = video.upvotes + 1
        video.downvotes = video.downvotes + 1
        setVideoInfo(video)
    }

    // function handleDisLikes() {
    //     let video = {...videoInfo}
    //     video.downvotes = video.downvotes + 1 
    //     setVideoInfo(video)
    // }

    function handleVisibility() {
        setIsVisible(!isVisible)
    }

    return (
        <div>
        <iframe
            width="919"
            height="525"
            src={videoInfo.embedUrl}
            frameBorder="0"
            allowFullScreen
            title={videoData.title}
        />
        <h1>{videoInfo.title}</h1>
         <span>
            {videoInfo.views} Views | Uploaded {videoInfo.createdAt}
         </span>

          <button onClick={handleLikes}> {videoInfo.upvotes} 👍 </button>
          <button onClick={handleLikes}> {videoInfo.downvotes} 👎 </button>
          <button onClick={handleVisibility}> {isVisible ? "Hide Comments" : "Show Comments"} </button>

          {isVisible ? <CommentsCard comments={videoInfo.comments} /> : "" }
        </div>
    )
}

export default VideoInfo 