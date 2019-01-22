import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';

import Form from './styles/Form';
import Error from './ErrorMessage';
import { ALL_PRODUCTS_QUERY } from './Items';
import { PAGINATION_QUERY } from './Pagination';
import wineCategoriesEnum from './WineCategories';

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $name: String!
    $country: String!
    $category: String!
    $year: Int
    $price: Float!
    $volume: Float
    $image: String
    $description: String
    $taste: String
    $food: String
  ) {
    createProduct(
      name: $name
      country: $country
      category: $category
      year: $year
      price: $price
      volume: $volume
      image: $image
      description: $description
      taste: $taste
      food: $food
    ) {
      id
    }
  }
`;

class CreateItem extends Component {
  state = {
    name: '',
    category: 'red',
    country: '',
    year: '',
    price: '',
    volume: 0,
    description: '',
    taste: '',
    food: '',
    image: '',
    loadingImage: false
  };

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

  uploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      return;
    }
    if (e.target.files.length === 0) {
      return;
    }

    this.setState({
      loadingImage: true
    });

    const files = e.target.files;

    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'winesupplyshop');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/danw/image/upload',
      {
        method: 'POST',
        body: data
      }
    );

    const file = await res.json();

    this.setState({
      image: file.secure_url,
      // largeImage: file.eager[0].secure_url,
      loadingImage: false
    });
  };

  render() {
    return (
      <Mutation
        refetchQueries={() => {
          return [{ query: ALL_PRODUCTS_QUERY }, { query: PAGINATION_QUERY }];
        }}
        mutation={CREATE_ITEM_MUTATION}
        variables={this.state}
      >
        {(createItem, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res: any = await createItem(); // call the mutation
              Router.push({
                pathname: '/product',
                query: { id: res.data.createProduct.id }
              });
            }}
          >
            <Error error={error} />
            <h2>Insert a Wine Product</h2>
            <fieldset
              disabled={loading || this.state.loadingImage}
              aria-busy={loading}
            >
              <label htmlFor="file">
                Image
                <input
                  type="file"
                  id="file"
                  name="file"
                  placeholder="Upload an image"
                  onChange={this.uploadFile}
                />
                {this.state.image && (
                  <img
                    src={this.state.image}
                    alt="Upload Preview"
                    height="50"
                  />
                )}
              </label>
              <label htmlFor="name">
                <span className="required">Name</span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                  value={this.state.name}
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
                  value={this.state.category}
                  onChange={this.handleChange}
                >
                  <option value={wineCategoriesEnum.Red}>Red</option>
                  <option value={wineCategoriesEnum.White}>White</option>
                  <option value={wineCategoriesEnum.Rose}>Rose</option>
                  <option value={wineCategoriesEnum.Sparkling}>
                    Sparkling
                  </option>
                  <option value={wineCategoriesEnum.Dessert}>Dessert</option>
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
                  value={this.state.country}
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
                  value={this.state.year}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="price">
                <span className="required">Price (€)</span>
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Price"
                  required
                  value={this.state.price}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="volume">
                Volume (CL)
                <input
                  type="number"
                  id="volume"
                  name="volume"
                  placeholder="Volume"
                  value={this.state.volume}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="description">
                Description
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter a Description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="taste">
                Taste
                <textarea
                  id="taste"
                  name="taste"
                  placeholder="Describe the Taste"
                  value={this.state.taste}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="food">
                Food
                <textarea
                  id="food"
                  name="food"
                  placeholder="Describe the Food"
                  value={this.state.food}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };
