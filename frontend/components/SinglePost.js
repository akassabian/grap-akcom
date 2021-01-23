import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Error from "./ErrorMessage";
import styled from "styled-components";
import Head from "next/head";
import TechSinglePostSidebar from "./TechSinglePostSidebar";
import HealthSinglePostSidebar from "./HealthSinglePostSidebar";

const SinglePostStyles = styled.div`
  white-space: pre-line;
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${(props) => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;

  .content-main {
    margin-top: 32px;
    overflow: hidden;
  }
  .similar-blogs {
    ul {
      list-style: none;
      padding-left: 0;
      li {
        margin-bottom: 20px;
      }
      a {
        color: #f7f7f7;
        text-decoration: none;
      }
      a:hover {
        color: #007bff;
      }
    }
  }
  .blog-content {
    margin-bottom: 20px;
    h2 {
      margin-bottom: 20px;
      margin-top: 30px;
    }
    h2:first-of-type {
      margin-top: 0;
    }
    .post-title-main {
      color: #f7f7f7;
      text-decoration: none;
    }
    .post-title-main:hover {
      color: #007bff;
    }
  }

  .similar-blogs {
    order: 2;
  }
  .blog-content {
    order: 1;
  }
  a {
    color: #007bff;
  }
  @media (min-width: 768px) {
    .similar-blogs {
      order: 1;
    }
    .blog-content {
      order: 2;
    }
  }
`;

const SINGLE_POST_QUERY = gql`
  query SINGLE_POST_QUERY($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      content
      parent
    }
  }
`;

function SinglePost(props){
    return (
      <Query
        query={SINGLE_POST_QUERY}
        variables={{
          id: props.id,
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.post) return <p>No Post Found for {this.props.id}</p>;
          const post = data.post;
          function whatCat(post) {
            if (post.parent === 1) {
              return "<TechSinglePostSidebar />";
            }
            if (post.parent === 2) {
              return "<TechSinglePostSidebar />";
            }
            return null;
          }

          const sideBar = whatCat(post);
          function createMarkup() {
            return { __html: post.content };
          }

          return (
            <SinglePostStyles>
              <Head>
                <title>Alain Kassabian | {post.title}</title>
              </Head>
              <div class="container content-main">
                <div class="row">
                  <div class="col-12 col-md-3 similar-blogs">
                    <ul>
                      {console.log(post.parent)}
                      {post.parent === 1 && <TechSinglePostSidebar />}
                      {post.parent === 2 && <HealthSinglePostSidebar />}
                    </ul>
                  </div>
                  <div class="col-12 col-md-9 blog-content">
                    <div className="details">
                      <h2>
                        <strong>{post.title}</strong>
                      </h2>
                      <div dangerouslySetInnerHTML={createMarkup()} />
                    </div>
                  </div>
                </div>
              </div>
            </SinglePostStyles>
          );
        }}
      </Query>
    );
  
}

export default SinglePost;
export { SINGLE_POST_QUERY };
