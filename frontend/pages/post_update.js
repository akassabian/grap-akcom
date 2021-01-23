import PleaseSignIn from '../components/PleaseSignIn';
//import PostSingleUpdateWrapper from '../components/PostSingleUpdateWrapper';
import WithPostSingleGet from '../components/WithPostSingleGet';
import UpdatePost from '../components/UpdatePost';
const UpdatePostWithSinglePost = WithPostSingleGet(UpdatePost);

const UpdatePostPage = ({ query }) => (
  <div>
    <PleaseSignIn>
      <UpdatePostWithSinglePost id={query.id} />
    </PleaseSignIn>
  </div>
);

export default UpdatePostPage;