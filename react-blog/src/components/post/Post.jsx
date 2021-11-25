import "./post.css"

export default function Post() {
    return (
        <div className="post">
            {/* <img
                className="postImg"
                src="./"
                alt=""
            /> */}
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 month ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero accusantium ad nobis tempore a laboriosam exercitationem ut, corporis enim doloremque modi fugit consectetur magni eaque delectus. Magni corporis quidem tempora.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero accusantium ad nobis tempore a laboriosam exercitationem ut, corporis enim doloremque modi fugit consectetur magni eaque delectus. Magni corporis quidem tempora.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero accusantium ad nobis tempore a laboriosam exercitationem ut, corporis enim doloremque modi fugit consectetur magni eaque delectus. Magni corporis quidem tempora.
            </p>
        </div>
    )
}
