import { motion } from "framer-motion";
import { Button, Col, Container, Row } from "react-bootstrap";

import MainHeader from "../../Components/MainHeader/MainHeader";
import WorkCard from "../../Components/WorksCard/WorkCard";
import { works } from "../../Data/config";

const Work = () => {
  return (
    <div className="work mt-4 mt-lg-5 mb-5">
      <Container>
        <MainHeader title="My works" subTitle="showcase about works" />

        <Row className="work-row d-flex justify-content-center justify-content-lg-start">
          {works?.map((item, index) => {
            return (
              <Col xs={item.xs} md={item.md} lg={item.lg} className="mb-4">
                <motion.div
                  initial={{ y: item.y, x: item.x, opacity: 0 }}
                  whileInView={{ y: 0, x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: item.delay }}
                >
                  <WorkCard
                    img={item.img}
                    subTitle={item.subTitle}
                    title={item.title}
                  />
                </motion.div>
              </Col>
            );
          })}
        </Row>

        <div className="mainBtn m-auto">Load more works</div>
      </Container>
    </div>
  );
};

export default Work;
