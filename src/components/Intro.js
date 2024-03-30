import { Container, Row, Col, Button } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro'>
          <Container className='text-white d-flex text-center justify-content-center align-item-center'>
            <Row>
              <Col>
              <div className='title'>RYANFLIX</div>
              <div className='title'>PASTI NGEHITS</div>
              <div className='introButton mt-4 text-center'>
              <Button href='#trending' variant='dark'>Liat Semua List</Button>
              </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro