import TechPosts from '../components/TechPosts';

const Tech = props => (
  <div>
    <TechPosts page={parseFloat(props.query.page) || 1} />
  </div>
);

export default Tech;