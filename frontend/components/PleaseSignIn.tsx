import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import SignIn from './SignIn';

interface IProps {
  children: JSX.Element;
};
const PleaseSignIn = (props: IProps) => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        return (
          <div>
            <p>Please Sign In before Continuing</p>
            <SignIn />
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);

export default PleaseSignIn;
