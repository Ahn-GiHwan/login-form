import React from "react";
import { useForm } from "react-hook-form";
import { Button, Card, CardBody, CardTitle, Col, Form, Row } from "reactstrap";
import { Input } from "../css/style";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Row style={{ width: "100%", margin: "0 auto" }}>
      <Col sm="4">
        <Card>
          <CardBody>
            <CardTitle tag="h5">로그인</CardTitle>
            <hr />
            <Form
              onSubmit={handleSubmit(() => {
                alert("hello");
              })}
              autocomplete="off"
            >
              <Row>
                <Col sm="3">
                  <span>아이디</span>
                </Col>
                <Col sm="9">
                  <Input {...register("id", { required: true })} />
                </Col>
              </Row>
              <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
                <Col sm="3">
                  <span>비밀번호</span>
                </Col>
                <Col sm="9">
                  <Input
                    type="password"
                    {...register("id", { required: true })}
                  />
                </Col>
              </Row>
              <Button color="primary" block>
                Button
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
