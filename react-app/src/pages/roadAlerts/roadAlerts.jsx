import React from "react"
import styled from "styled-components"
import { Link } from '@reach/router'

import Header from '../../components/header'
import SEO from '../../components/seo'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
  padding: 0.5rem 1.25rem;
`;

const Title = styled.h1`
  margin: 1em 0;
  margin-bottom: 1.5em;
  font-weight: 600;
`;
const Line = styled.div`
  border-bottom: solid 1.5px #000000;
`;
const Card = styled.div`
  border: 1px solid #dddddd;
  border-radius: 8px;
  margin: 0.5em 0;
`;

const CardBody = styled.div`
  padding: 1em 1.25em;
`;

const CardTitle = styled.h3`
  font-weight: 600;
  margin: 0;
  padding-bottom: 1em;
`;

const CardText = styled.p`
  //  margin: 1em 0;
`;

const Button = styled.button`
  background-color: #484848;
  padding: 0.5em 1em;
  border-radius: 4px;
`;

const ButtonLink = styled(Link)`
  font-family: neue-haas-unica;
  font-weight: 500;
  text-decoration: none;
  color: white;
  font-size: 15px;
`;


class RoadAlerts extends React.Component{
    constructor(props) {
      super(props);
    }
    render() {
       return (
         <>
          <SEO title="Road Alerts"/>
          <Header />
            <Container>
              <Title>Select a County</Title>
              <Card>
                <CardBody>
                <CardTitle>King County</CardTitle>
                <Button variant="dark" aria-label="click"><ButtonLink to="kingalerts">Select</ButtonLink></Button>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                <CardTitle>Snohomish County</CardTitle>
                <Button variant="dark" aria-label="click"><ButtonLink to="snohomishalerts">Select</ButtonLink></Button>
                </CardBody>
              </Card>
              {/* <Card>
                <CardBody>
                <CardTitle>Pierce County</CardTitle>
                <CardText>
                  4 alerts
                </CardText>
                <Button variant="dark">Select</Button>
                </CardBody>
              </Card> */}
          </Container>
          </>
       )
      }
 }

 export default RoadAlerts;