
function Comment({comments}) {
    return (
    <div>
        <h2> {comments.user} says: </h2>
        <h3>"{comments.comment}"</h3>
    </div>
    )}

export default Comment