import SingleItem from '../components/SingleItem';

interface IProps {
  query: {
    id: string;
  };
}

const Product = (props: IProps) => (
  <div>
    <SingleItem id={props.query.id} />
  </div>
);

export default Product;
