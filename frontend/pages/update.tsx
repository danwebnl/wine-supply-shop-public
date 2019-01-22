import UpdateItem from '../components/UpdateItem';

interface IProps {
  query: {
    id: string;
  };
}

const Update = (props: IProps) => (
  <div>
    <UpdateItem id={props.query.id} />
  </div>
);

export default Update;
