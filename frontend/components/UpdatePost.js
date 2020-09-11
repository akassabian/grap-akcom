import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";
import Error from "./ErrorMessage";

const SINGLE_POST_QUERY = gql`
  query SINGLE_POST_QUERY($id: ID!) {
    post(where: { id: $id }) {
      title
      id
      type
      content
      excerpt
      comment_status
      password
      parent
      slug
    }
  }
`;
const UPDATE_POST_MUTATION = gql`
  mutation UPDATE_POST_MUTATION(
    $id: ID!
    $title: String
    $type: String
    $content: String
    $excerpt: String
    $comment_status: String
    $password: String
    $parent: Int
    $slug: String
  ) {
    updatePost(
      id: $id
      title: $title
      type: $type
      content: $content
      excerpt: $excerpt
      comment_status: $comment_status
      password: $password
      parent: $parent
      slug: $slug
    ) {
      id
      type
      content
      excerpt
      comment_status
      password
      parent
      slug
    }
  }
`;

class UpdatePost extends Component {
  state = {};
  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  updatePost = async (e, updatePostMutation) => {
    e.preventDefault();
    console.log("Updating Post!!");
    console.log(this.state);
    const res = await updatePostMutation({
      variables: {
        id: this.props.id,
        ...this.state,
      },
    });
    console.log("Updated!!");
  };

  render() {
    return (
      <Query
        query={SINGLE_POST_QUERY}
        variables={{
          id: this.props.id,
        }}
      >
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!data.post) return <p>No Post Found for ID {this.props.id}</p>;
          return (
            <Mutation mutation={UPDATE_POST_MUTATION} variables={this.state}>
              {(updatePost, { loading, error }) => (
                <Form onSubmit={(e) => this.updatePost(e, updatePost)}>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="title">
                      Title
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"                        
                        defaultValue={data.post.title}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="type">
                      Type
                      <input
                        type="text"
                        id="type"
                        name="type"
                        placeholder="Define Post Type"                        
                        defaultValue={data.post.type}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="slug">
                      Slug
                      <input
                        type="text"
                        id="slug"
                        name="slug"
                        placeholder="Enter URL Slug"                        
                        defaultValue={data.post.slug}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="excerpt">
                      Excerpt
                      <input
                        type="text"
                        id="excerpt"
                        name="excerpt"
                        placeholder="Enter Excerpt"                        
                        defaultValue={data.post.excerpt}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="comment_status">
                      Comment Status
                      <input
                        type="text"
                        id="comment_status"
                        name="comment_status"
                        placeholder="Turn Comments on or Off"                        
                        defaultValue={data.post.comment_status}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="parent">
                      Parent
                      <input
                        type="number"
                        id="parent"
                        name="parent"
                        placeholder="Enter ID of Parent Element"                        
                        defaultValue={data.post.parent}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="content">
                      Content
                      <textarea
                        id="content"
                        name="content"
                        placeholder="Enter the content"                        
                        defaultValue={data.post.content}
                        onChange={this.handleChange}
                      />
                    </label>
                    <button type="submit">
                      Sav{loading ? "ing" : "e"} Changes
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

export default UpdatePost;
export { UPDATE_POST_MUTATION };
