import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';

import Form from './styles/Form';
import Error from './ErrorMessage';
import wineCategoriesEnum from './WineCategories';

interface IProps {
  id: string;
}

const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $name: String
    $country: String
    $category: String
    $year: Int
    $price: Float
    $volume: Float
    $description: String
    $taste: String
    $food: String
  ) {
    updateProduct(
      id: $id
      name: $name
      country: $country
      category: $category
      year: $year
      price: $price
      volume: $volume
      description: $description
      taste: $taste
      food: $food
    ) {
      id
      name
      country
      category
      year
      price
      volume
      description
      taste
      food
    }
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    product(where: { id: $id }) {
      id
      name
      category
      country
      year
      price
      volume
      description
      taste
      food
    }
  }
`;

class UpdateItem extends Component<IProps> {
  state = {};

  handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const { name, type, value } = e.currentTarget;
    // console.log({ name, type, value });

    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  updateItem = async (
    e: React.FormEvent<HTMLFormElement>,
    updateItemMutation: any
  ) => {
    e.preventDefault();

    const res: any = await updateItemMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });

    Router.push({
      pathname: '/product',
      query: { id: res.data.updateProduct.id }
    });
  };

  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!data) return <p>No Item Found for ID {this.props.id}</p>;
          return (
            <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
              {(updateItem, { loading, error }) => (
                <Form onSubmit={e => this.updateItem(e, updateItem)}>
                  <Error error={error} />
                  <h2>Update Wine Details</h2>
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="name">
                      <span className="required">Name</span>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        required
                        defaultValue={data.product.name}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="category">
                      <span className="required">Category</span>
                      <select
                        id="category"
                        name="category"
                        placeholder="Category"
                        required
                        value={data.product.category}
                        onChange={this.handleChange}
                      >
                        <option value={wineCategoriesEnum.Red}>Red</option>
                        <option value={wineCategoriesEnum.White}>White</option>
                        <option value={wineCategoriesEnum.Rose}>Rose</option>
                        <option value={wineCategoriesEnum.Sparkling}>
                          Sparkling
                        </option>
                        <option value={wineCategoriesEnum.Dessert}>
                          Dessert
                        </option>
                      </select>
                    </label>

                    <label htmlFor="country">
                      <span className="required">Country</span>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        placeholder="Country"
                        required
                        defaultValue={data.product.country}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="year">
                      <span className="required">Year</span>
                      <input
                        type="number"
                        id="year"
                        name="year"
                        placeholder="Year"
                        required
                        defaultValue={data.product.year}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="price">
                      <span className="required">Price (€)</span>
                      <input
                        type="number"
                        step="0.01"
                        id="price"
                        name="price"
                        placeholder="Price"
                        required
                        defaultValue={data.product.price}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="volume">
                      Volume (CL)
                      <input
                        type="number"
                        step="0.01"
                        id="volume"
                        name="volume"
                        placeholder="Volume"
                        defaultValue={data.product.volume}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="description">
                      Description
                      <textarea
                        id="description"
                        name="description"
                        placeholder="Enter a Description"
                        defaultValue={data.product.description}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="taste">
                      Taste
                      <textarea
                        id="taste"
                        name="taste"
                        placeholder="Describe the Taste"
                        defaultValue={data.product.taste}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="food">
                      Food
                      <textarea
                        id="food"
                        name="food"
                        placeholder="Describe the Food"
                        defaultValue={data.product.food}
                        onChange={this.handleChange}
                      />
                    </label>
                    <button type="submit">
                      Sav{loading ? 'ing' : 'e'} Changes
                    </button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UpdateItem;
export { UPDATE_ITEM_MUTATION };
