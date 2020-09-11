import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Row, Col } from "antd";
import Error from "./ErrorMessage";
import styled from "styled-components";
import Head from "next/head";

const SinglePostStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${(props) => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

const SINGLE_POST_QUERY = gql`
  query SINGLE_POST_QUERY($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      content
    }
  }
`;
class SinglePost extends Component {
  render() {
    return (
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Query
            query={SINGLE_POST_QUERY}
            variables={{
              id: this.props.id,
            }}
          >
            {({ error, loading, data }) => {
              if (error) return <Error error={error} />;
              if (loading) return <p>Loading...</p>;
              if (!data.post) return <p>No Post Found for {this.props.id}</p>;
              const post = data.post;
              return (
                <SinglePostStyles>
                  <Head>
                    <title>Sick Fits | {post.title}</title>
                  </Head>
                  <div className="details">
                    <h2>Viewing {post.title}</h2>
                    <p>{post.content}</p>
                  </div>
                </SinglePostStyles>
              );
            }}
          </Query>
        </Col>
      </Row>
    );
  }
}

export default SinglePost;
export { SINGLE_POST_QUERY };
