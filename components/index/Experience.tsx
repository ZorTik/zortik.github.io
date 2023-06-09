import {Col, Container, ProgressBar, Row} from "react-bootstrap";

import styles from "../../styles/Experience.module.css";
import {PropsWithChildren, useEffect, useState} from "react";
import styled from "styled-components";

const Statistic = (props: PropsWithChildren) => {
    return <Col className={styles.statistic}>{props.children}</Col>
}
const TechnologiesComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  
  @media screen and (max-width: 768px) {
    align-items: flex-start;
    
    > * {
      width: 100% !important;
    }
  }
`;
type ProgressTechnologyProps = PropsWithChildren & {
    name: string,
    progress: number
}
const ProgressLabelComponent = styled.div`
  width: 60%;
  padding: 0 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  
  p {
    margin: 0;
    color: white
  }
`;
const ProgressComponent = styled(ProgressBar)`
  height: 20px;
  width: 60%;
  border-radius: 14px;
`;
const ProgressTechnology = (props: ProgressTechnologyProps) => {
    return <>
        <ProgressLabelComponent>
            <p>{props.name}</p>
            <p>{`${props.progress}%`}</p>
        </ProgressLabelComponent>
        <ProgressComponent variant="success" now={props.progress} animated />
    </>
}

const Experience = () => {
    return (
        <Row className={styles.experience} id="experience">
            <Container className={styles.experienceContainer}>
                <Row style={{height: "100% !important"}}>
                    <Col className={styles.expNums}>
                        <Row>
                            <Statistic>
                                <h1>5+</h1>
                                <h2>Years of active programming.</h2>
                            </Statistic>
                            <Statistic>
                                <h1>50+</h1>
                                <h2>Commissions done so far.</h2>
                            </Statistic>
                        </Row>
                        <TechnologiesComponent>
                            <ProgressTechnology name="Java lang" progress={90} />
                            <ProgressTechnology name="JavaScript/TypeScript lang" progress={80} />
                            <ProgressTechnology name="Python lang" progress={50} />
                            <ProgressTechnology name="C# lang" progress={40} />
                            <ProgressTechnology name="Go lang" progress={10} />
                        </TechnologiesComponent>
                    </Col>
                    <Col className={styles.expLore} xl={5}>
                        <h1 id="about">Who am I?</h1>
                        <p>Since the beginning, when I dreamt about building something great, am passionate developer who loves making innovative solutions, that make real impact. As member of successful game building community, I gained a lot of experience in software development. Some of my public works are listed below or on my GitHub. So, I just ask: Is there anything better than just trying it with me? You can contact me using my social media on the bottom of this page.</p>
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}

export default Experience;
