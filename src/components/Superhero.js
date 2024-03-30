import { Card, Container, Row, Col, Image } from "react-bootstrap"
import blackwidowImage from "../assets/images/superhero/blackwidow.jpg"
import strangeImage from "../assets/images/superhero/drstrange.jpg"
import ironmanImage from "../assets/images/superhero/ironman.jpg"
import spidermanImage from "../assets/images/superhero/spiderman.jpg"
import wonderImage from "../assets/images/superhero/wonderwoman.jpg"
import xmenImage from "../assets/images/superhero/xmen.jpg"

const Superhero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={blackwidowImage} alt="Black Widow Movies" className="Images" />
                            <div className=" bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Black Widow</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text
                                        className="text-left">Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={xmenImage} alt="X-Men Movies" className="Images" />
                            <div className=" bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">X-Man</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text
                                        className="text-left">Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={wonderImage} alt="Wonder Woman Movies" className="Images" />
                            <div className=" bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Wonder Woman</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text
                                        className="text-left">Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={ironmanImage} alt="Iron Man Movies" className="Images" />
                            <div className=" bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Iron Man</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text
                                        className="text-left">Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={spidermanImage} alt="Spiderman Movies" className="Images" />
                            <div className=" bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Spiderman</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text
                                        className="text-left">Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={strangeImage} alt="Dr.Strange Movies" className="Images" />
                            <div className=" bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Dr.Stranger</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text
                                        className="text-left">Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Superhero