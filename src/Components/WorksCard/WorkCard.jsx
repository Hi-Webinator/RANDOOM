

import { Card } from 'react-bootstrap';
import './work-card.css';
const WorkCard = ({ img, subTitle, title }) => {
    return (
        <div className="workCard">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body className="ps-0 text-center">
                    <Card.Subtitle className='mt-1 mb-2 fs-6'>{subTitle}</Card.Subtitle>
                    <Card.Title className='fs-5'>{title}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default WorkCard
