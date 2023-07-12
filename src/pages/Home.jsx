import React from "react";
import { styled } from "styled-components";
import Header from "../components/Header";
import Input from "../components/Input";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <Layout>
      <Container>
        <Header />
        <Input />
        <TodoList listIsDone={false} />
        <TodoList listIsDone={true} />
      </Container>
    </Layout>
  );
};

export default Home;

const Layout = styled.div`
  margin: 0 auto;
`;

const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
