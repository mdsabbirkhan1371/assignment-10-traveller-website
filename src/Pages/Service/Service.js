import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Service = ({ service }) => {
    const { name, description, img } = service;

    return (
        <div className='col-sm-12 col-md-6 col-lg-4 g-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{ width: '100px', paddingLeft: '10px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 50)}
                    </Card.Text>
                    <Button variant="primary">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;