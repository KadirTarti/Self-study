import {Card, Button, Col, Row} from 'react-bootstrap';

import './Main.scss'

const Card1 = ({veri}) => {
  console.log(veri);

  return (
    <div className='d-flex flex-wrap'>
    {veri.map(({id, title, desc, image}) =>{
      return (
        <Col className='col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center' key={id}>
      <Card className='cards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Text className="card-text overflow-auto" style={{ height: '200px'}}>
          {desc}
        </Card.Text>
        <Button variant="primary">{title}</Button>
      </Card.Body>
    </Card>
      </Col>
      )
    })}
    </div>
  )
}

export default Card1;