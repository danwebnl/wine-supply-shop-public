import Items from '../components/Items';

interface IProps {
  query: {
    page: string;
  };
}

const Products = (props: IProps) => (
  <div>
    <Items page={parseFloat(props.query.page) || 1} />
  </div>
);

export default Products;
