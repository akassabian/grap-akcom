import React, { Component, useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";
import Error from "./ErrorMessage";

const CREATE_POST_MUTATION = gql`
  mutation CREATE_POST_MUTATION(
    $title: String!
    $type: String!
    $content: String
    $comment_status: String!
    $slug: String!
    $parent: Int
  ) {
    createPost(
      title: $title
      type: $type
      content: $content
      comment_status: $comment_status
      slug: $slug
      parent: $parent
    ) {
      id
    }
  }
`;

function createPost() {
//  const [title, setTitle] = useState("");
//  const [type, setType] = useState("post");
//  const [content, setContent] = useState("");
//  const [comment_status, setComment_status] = useState("off");
//  const [slug, setSlug] = useState("");
//  const [parent, setParent] = useState("");
  const [state, setState] = useState({
    title: "",
    type: "post",
    content: "",
    comment_status: "off",
    slug: "",
    parent: ""
  });

  function handleChange(e) {
    const { name, type, value } = e.target;
    //if type === number then set VAL to the Floating Integer of VALUE, else set VAL to VALUE
    const val = type === "number" ? parseFloat(value) : value;
    setState({ 
      ...state,
      [name]: val });
  }


  function handleChangeTitle(e) {
    const { name, type, value } = e.target;
    //if type === number then set VAL to the Floating Integer of VALUE, else set VAL to VALUE
    const val = type === "number" ? parseFloat(value) : value;
    setTitle(value);
  }

  function handleChangeType(e) {
    const { name, type, value } = e.target;
    //if type === number then set VAL to the Floating Integer of VALUE, else set VAL to VALUE
    const val = type === "number" ? parseFloat(value) : value;
    setType(value);
  }

  function handleChangeContent(e) {
    const { name, type, value } = e.target;
    //if type === number then set VAL to the Floating Integer of VALUE, else set VAL to VALUE
    const val = type === "number" ? parseFloat(value) : value;
    setContent(value);
  }

  function handleChangeComment_status(e) {
    const { name, type, value } = e.target;
    //if type === number then set VAL to the Floating Integer of VALUE, else set VAL to VALUE
    const val = type === "number" ? parseFloat(value) : value;
    setComment_status(value);
  }

  function handleChangeSlug(e) {
    const { name, type, value } = e.target;
    //if type === number then set VAL to the Floating Integer of VALUE, else set VAL to VALUE
    const val = type === "number" ? parseFloat(value) : value;
    setSlug(value);
  }

  function handleChangeParent(e) {
    const { name, type, value } = e.target;
    //if type === number then set VAL to the Floating Integer of VALUE, else set VAL to VALUE
    const val = type === "number" ? parseFloat(value) : value;
    setParent(value);
  }

  return (
    <Mutation mutation={CREATE_POST_MUTATION} variables={state}>
      {(createPost, { loading, error }) => (
        <Form
          //data-test="form"
          onSubmit={async (e) => {
            // Stop the form from submitting
            e.preventDefault();
            // call the mutation
            const res = await createPost();
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

            <button type="submit">Submit</button>
          </fieldset>
        </Form>
      )}
    </Mutation>
  );
}

class createPostClass extends Component {
  state = {
    title: "",
    type: "post",
    content: "",
    comment_status: "off",
    slug: "",
  };
  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  render() {
    return (
      <Mutation mutation={CREATE_POST_MUTATION} variables={this.state}>
        {(createPost, { loading, error }) => (
          <Form
            //data-test="form"
            onSubmit={async (e) => {
              // Stop the form from submitting
              e.preventDefault();
              // call the mutation
              const res = await createPost();
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
                  value={this.state.title}
                  onChange={this.handleChange}
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
                  value={this.state.slug}
                  onChange={this.handleChange}
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
                  value={this.state.content}
                  onChange={this.handleChange}
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
                  value={this.state.parent}
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

export default createPost;
export { CREATE_POST_MUTATION };
