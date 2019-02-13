import React from "react";
import styled from 'styled-components';
import {Query} from 'react-apollo';
import {Helmet} from 'react-helmet';
import {HOME_PAGE} from './queries';
import Movie from './Movie'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => (
    <Container>
        <Helmet>
            <title>Movie Client with GraphQL and apollo</title>
        </Helmet>
        <Query query={HOME_PAGE}>
            {({loading, data, error})=>{
                if(loading) return <span>loading</span>;
                if(error) return <span>something error</span>;
                return data.movies.map(movie => (   
                    <Movie
                        id={movie.id}
                        key={movie.id}
                        poster={movie.medium_cover_image}
                        title={movie.title}
                        rating={movie.rating}
                    />
                ));
            }}
        </Query>
    </Container>
);



export default Home;