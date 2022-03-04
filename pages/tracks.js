import React from "react";
import Img from "next/image";
// useQuery is for the "loading,error and data" for the Query
import { gql, useQuery } from "@apollo/client";

// QUERIES like tracks should be CAPITALIZED
const TRACKS = gql`
  query ExampleQuery {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
    }
  }
`;

export default function Hello() {
  const { loading, error, data } = useQuery(TRACKS);
  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <div>
        <p>Hello {JSON.stringify(data)}</p>
      </div>
      <div>{() => data.tracksForHome.title}</div>
    </>
  );

  /* Use next line to check the data that was Fetched or Gotten from the Server */
  //   return <h1>{JSON.stringify(data)}</h1>;
}
