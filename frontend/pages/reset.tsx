import Reset from '../components/Reset';

interface IProps {
  query: {
    resetToken: string;
  };
}

const ResetPage = (props: IProps)  => (
  <div>
    <Reset resetToken={props.query.resetToken} />
  </div>
);

export default ResetPage;
