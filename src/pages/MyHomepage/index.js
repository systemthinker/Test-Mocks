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
import StoryForm from "./StoryForm";
import Homepage from "../../components/Homepage";

export default function MyHomepage() {
  const { token, homepage, id } = useSelector(selectUser);
  const [editMode, setEditMode] = useState(false);
  const [postStoryMode, setpostStoryMode] = useState(false);
  const history = useHistory();

  if (token === null) {
    history.push("/");
  }

  if (homepage === null) {
    return <Loading />;
  }

  const displayButtons =
    id === homepage.userId && editMode === false && postStoryMode === false;

  console.log("EDITMODE", editMode);
  return (
    <Container>
      <Homepage
        id={homepage.id}
        title={homepage.title}
        description={homepage.description}
        backgroundColor={homepage.backgroundColor}
        color={homepage.color}
        showLink={false}
      />

      {displayButtons ? (
        <Card>
          <Button onClick={() => setEditMode(true)}>Edit my page</Button>
          <Button onClick={() => setpostStoryMode(true)} className="mt-2">
            Post a cool story bro
          </Button>
        </Card>
      ) : null}

      {editMode ? (
        <Card>
          <MyHomepageForm />
        </Card>
      ) : null}

      {postStoryMode ? (
        <Card>
          <StoryForm />
        </Card>
      ) : null}

      <Carousel className="mt-5">
        {homepage.stories.map(story => {
          return (
            <Carousel.Item key={story.id}>
              {story.imageUrl ? (
                <img
                  className="d-block w-100"
                  src={story.imageUrl}
                  alt="story image"
                />
              ) : null}
              <Carousel.Caption
                style={{
                  backgroundColor: `${homepage.backgroundColor}99`,
                  color: homepage.color
                }}
                className="p-5"
              >
                <h3>{story.name}</h3>
                <p>{story.content}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}
