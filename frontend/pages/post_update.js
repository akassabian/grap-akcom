import UpdatePost from '../components/UpdatePost';
import PleaseSignIn from '../components/PleaseSignIn';

const UpdatePostPage = ({ query }) => (
  <div>
    <PleaseSignIn>
      <UpdatePost id={query.id} />
    </PleaseSignIn>
  </div>
);

export default UpdatePostPage;