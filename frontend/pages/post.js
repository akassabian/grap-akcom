import SinglePost from "../components/SinglePost";

const Post = (props) => (
  <div class="single-post">
    <SinglePost id={props.query.id} />
  </div>
);

export default Post;
