import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './Footer.css'

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className="Footer">
            <Container>
                <Row>
                    <Col xs='12' md='6'>
                        <div className="allRights">
                            © {new Date().getFullYear()} - Cows & Bulls, All Rights Reserved
                        </div>
                    </Col>
                    <Col xs='12' md='6'>
                        <div className="createdBy">
                            Created by<a className='companyName' href='#'>Alizadeh</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;