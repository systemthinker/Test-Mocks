import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Loading from "../../components/Loading";
import { useHistory } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MyHomepageForm from "./MyHomepageForm";

export default function MyHomepage() {
  const { token, homepage, id } = useSelector(selectUser);
  const [editMode, setEditMode] = useState(false);
  const history = useHistory();

  if (token === null) {
    history.push("/");
  }

  if (homepage === null) {
    return <Loading />;
  }

  const displayEditButton = id === homepage.userId && editMode === false;

  return (
    <Container>
      <Jumbotron
        style={{
          backgroundColor: homepage.backgroundColor,
          color: homepage.color
        }}
      >
        <h1>{homepage.title}</h1>
        <p>{homepage.description}</p>
      </Jumbotron>

      <Card>
        {displayEditButton ? (
          <Button onClick={() => setEditMode(true)}>Edit my page</Button>
        ) : null}

        {editMode ? <MyHomepageForm /> : null}
      </Card>

      <Carousel className="mt-5">
        {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
      </Carousel>
    </Container>
  );
}
