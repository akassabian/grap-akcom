import UpdatePost from '../components/UpdatePost';
import PostSingleGet from '../components/PostSingleGet';
import PleaseSignIn from '../components/PleaseSignIn';

const UpdatePostPage = ({ query }) => (
  <div>
    <PleaseSignIn>
      <PostSingleGet id={query.id} />
    </PleaseSignIn>
  </div>
);

export default UpdatePostPage;