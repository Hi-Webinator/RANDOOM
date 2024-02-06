import Card from 'react-bootstrap/Card';
import './card-projects.css';

function CardProjects({ image, title, client, work }) {
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body className='ps-0'>
                <Card.Title className='mt-2 d-flex align-items-center mb-4 pb-2'>
                {title}
                <span className="ms-5 line"></span>
                </Card.Title>
                <div className="d-flex flex-column">
                    <div className="d-flex mb-1">
                        <h6 className='type text-capitalize me-4'>client: </h6>
                        <h6 className='text-capitalize'>{client}</h6>
                    </div>
                    <div className="d-flex">
                        <h6 className='type text-capitalize me-4'>work: </h6>
                        <h6 className='text-capitalize'>{work}</h6>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardProjects;