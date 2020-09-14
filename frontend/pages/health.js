import HealthPosts from '../components/HealthPosts';

const Health = props => (
  <div>
    <HealthPosts page={parseFloat(props.query.page) || 1} />
  </div>
);

export default Health;