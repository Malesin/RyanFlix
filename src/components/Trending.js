import { Card, Container, Row, Col, Image } from "react-bootstrap"
import starWars from "../assets/images/trending/Star.jpg"
import ragnarok from "../assets/images/trending/ragnarok.jpg"
import dune2Image from "../assets/images/trending/dune2.jpg"
import lotrImage from "../assets/images/trending/lotr.jpg"
import solarisImage from "../assets/images/trending/solaris.jpg"
import astroImage from "../assets/images/trending/astronaut.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={starWars} alt="Star Wars Movies" className="Images" />
                            <div className=" bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">StarWars</Card.Title>
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
                            <Image src={dune2Image} alt="Dune Part Two" className="Images" />
                            <div className=" bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Dune Part: Two</Card.Title>
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
                            <Image src={astroImage} alt="Astronaut" className="Images" />
                            <div className=" bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Astronaut</Card.Title>
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
                            <Image src={lotrImage} alt="Lord Of The Rings" className="Images" />
                            <div className=" bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Lord Of The Rings</Card.Title>
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
                            <Image src={solarisImage} alt="Solaris" className="Images" />
                            <div className=" bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Solaris</Card.Title>
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
                            <Image src={ragnarok} alt="The Ragnarok" className="Images" />
                            <div className=" bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Ragnarok</Card.Title>
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

export default Trending