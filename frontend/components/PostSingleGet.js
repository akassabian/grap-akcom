
import React, { Component, useState } from "react";
import { Mutation, Query } from "react-apollo";
import UpdatePost from '../components/UpdatePost';
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

function PostSingleGet(props){
    return (
        <Query
          query={SINGLE_POST_QUERY}
          variables={{
            id: props.id,
          }}
        >
          {({ data, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (!data.post) return <p>No Post Found for ID {props.id}</p>;
            return(
            <UpdatePost postData={data} id={props.id} />
            );
          }}
        </Query>
      );
}

export default PostSingleGet;