import {Card, Button} from 'react-bootstrap';

import './Main.scss'

const Card1 = ({veri}) => {
  console.log(veri);

  return (
    <div>
    {veri.map(({id, title, desc, image}) =>{
      return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button variant="primary">{title}</Button>
      </Card.Body>
    </Card>
      )
    })}
    </div>
  )
}

export default Card1;