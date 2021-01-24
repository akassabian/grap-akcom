import React, { Component, useState } from "react";
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

function UpdatePost(props) {
  const [state, setState] = useState({
    title: props.postData.post.title,
    type: props.postData.post.type,
    content: props.postData.post.content,
    comment_status: props.postData.post.comment_status,
    slug: props.postData.post.slug,
    parent: props.postData.post.parent,
  });

  function handleChange(e) {
    const { name, type, value } = e.target;
    //if type === number then set VAL to the Floating Integer of VALUE, else set VAL to VALUE
    const val = type === "number" ? parseFloat(value) : value;
    setState({
      ...state,
      [name]: val,
    });
  }
  
  return (
    <Mutation mutation={UPDATE_POST_MUTATION} variables={state}>
      {(updatePost, { loading, error }) => (
        <Form
          onSubmit={async (e) => {
            // Stop the form from submitting
            e.preventDefault();
            // call the mutation
            const res = await updatePost({
              variables: {
                id: props.id,
                ...state,
              },
            }).catch(err => {
              alert(err.message);
            });
            // change them to the single item page
            console.log(res);
            /*Router.push({
                  pathname: '/item',
                  query: { id: res.data.createPost.id },
                });*/
          }}
        >
          <Error error={error} />
          <fieldset disabled={loading} aria-busy={loading}>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                required
                value={state.title}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="slug">
              Slug
              <input
                type="text"
                id="slug"
                name="slug"
                placeholder="Slug"
                required
                value={state.slug}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="content">
              Content
              <textarea
                type="text"
                id="content"
                name="content"
                placeholder="Enter Content Here"
                required
                value={state.content}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="parent">
              Category
              <input
                type="int"
                id="parent"
                name="parent"
                placeholder="Category"
                required
                value={state.parent}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Sav{loading ? "ing" : "e"} Changes</button>
          </fieldset>
        </Form>
      )}
    </Mutation>
  );
}

export default UpdatePost;
export { UPDATE_POST_MUTATION };
