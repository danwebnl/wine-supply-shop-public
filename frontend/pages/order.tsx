import PleaseSignIn from '../components/PleaseSignIn';
import Order from '../components/Order';

interface IProps {
  query: {
    id: string;
  };
}

const OrderPage = (props: IProps) => (
  <div>
    <PleaseSignIn>
      <Order id={props.query.id} />
    </PleaseSignIn>
  </div>
);

export default OrderPage;
