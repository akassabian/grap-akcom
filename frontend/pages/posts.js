import CreatePost from '../components/CreatePost';
import PleaseSignIn from '../components/PleaseSignIn';

const Sell = props => (
  <div>
    <PleaseSignIn>
      <CreatePost />
    </PleaseSignIn>
  </div>
);

export default Sell;
