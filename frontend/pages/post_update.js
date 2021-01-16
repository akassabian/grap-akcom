import UpdatePost from '../components/UpdatePost';

const UpdatePostPage = ({ query }) => (
  <div>
    <UpdatePost id={query.id} />
  </div>
);

export default UpdatePostPage;