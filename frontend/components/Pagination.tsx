import React from 'react';
import PaginationStyles from './styles/PaginationStyles';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Head from 'next/head';
import Link from 'next/link';

import { perPage } from '../config';

interface IProps {
  page: number;
}

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    productsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = (props: IProps) => (
  <PaginationStyles>
    <Query query={PAGINATION_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}.</p>;
        const count = data.productsConnection.aggregate.count;
        const pages = Math.ceil(count / perPage);
        const page = props.page;
        return (
          <PaginationStyles data-test="pagination">
            <Head>
              <title>
                Wine Supply Shop — Page {page} of {pages}
              </title>
            </Head>
            <Link
              prefetch
              href={{
                pathname: 'products',
                query: { page: page - 1 }
              }}
            >
              <a className="prev" aria-disabled={page <= 1}>
                ← Prev
              </a>
            </Link>
            <p>
              Page {props.page} of <span className="totalPages">{pages}</span>
            </p>
            <p>{count} Products Total</p>
            <Link
              prefetch
              href={{
                pathname: 'products',
                query: { page: page + 1 }
              }}
            >
              <a className="next" aria-disabled={page >= pages}>
                Next →
              </a>
            </Link>
          </PaginationStyles>
        );
      }}
    </Query>
  </PaginationStyles>
);

export default Pagination;
export { PAGINATION_QUERY };
