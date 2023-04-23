import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import {
  FaRegBookmark,
  FaShareAlt,
  FaRegEye,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import moment from "moment";
import { Link } from "react-router-dom";
import Rating from "react-rating";
const NewsCard = ({ news }) => {
  const { _id, details, rating, total_view, title, author, image_url } = news;
  return (
    <Container className="mb-4">
      <Card>
        <div
          className="d-flex p-2 align-items-center"
          style={{ background: "#F3F3F3" }}
        >
          <Card.Img
            className="rounded-circle me-2"
            style={{ width: "45px", height: "48px" }}
            src={author?.img}
          />
          <div className="flex-grow-1 mt-3">
            <p className="d-flex flex-column">
              <small>{author?.name}</small>

              <small>
                {moment(author?.published_date).format("yyyy-mm-d")}
              </small>
            </p>
          </div>

          <p>
            <FaRegBookmark />
            <FaShareAlt />
          </p>
        </div>
        <Card.Img src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...{" "}
                <span>
                  <Link
                    to={`/news/${_id}`}
                    style={{ textDecoration: "none", color: "orange" }}
                  >
                    ....Read more.
                  </Link>
                </span>
              </>
            )}
          </Card.Text>

          <hr />

          <div className="d-flex">
            <div className="d-flex flex-grow-1">
              <Rating
                style={{ color: "#FF8C47" }}
                placeholderRating={rating?.number}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
                readonly
              />

              <span className="ms-2">{rating?.number}</span>
            </div>
            <div>
              <FaRegEye />
              <span className="ms-2">{total_view}</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NewsCard;
