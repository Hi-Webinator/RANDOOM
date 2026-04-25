import Card from "react-bootstrap/Card";
import "./card-projects.css";

function CardProjects({ image, title, client, work }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body className="ps-0">
        <Card.Title className="d-flex align-items-center mt-2 mb-4 pb-2">
          {title}
          <span className="ms-5 line"></span>
        </Card.Title>
        <div className="d-flex gap-2 text-capitalize mb-1">
          <h6 className="type me-">client :</h6>
          <h6>{client}</h6>
        </div>
        <div className="d-flex gap-3 text-capitalize">
          <h6 className="type">work :</h6>
          <h6>{work}</h6>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardProjects;
