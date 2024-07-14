import { useAuth0 } from "@auth0/auth0-react";
import { Container, Modal, ModalBody } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Button } from "react-bootstrap";
import { TaskState, Task } from "../interface/Task";
<<<<<<< HEAD
import React from "react";
import { useDispatch } from "react-redux";
=======
import React, { useState } from "react";
import { UseDispatch } from "react-redux";
>>>>>>> 8e51cf4b4f4d06f7a616f1177ae2c2e9650c7c47
import { deleteTask } from "../features/taskSlice";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const { tasks } = useSelector((state: TaskState) => state.tasks);
  const userTasks = tasks.filter((item: Task) => item.email === user?.email);
  const [modalShow, setModalShow] = React.useState(false);

  // getAccessTokenSilently().then((token) => console.log(token));
  console.log(user);
  console.log(tasks);

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  };

  return (
    <Container className="mt-5">
      <h1>Dashboard</h1>
      <Row>
        {userTasks.map((task: Task) => (
          <Col key={task.id} className="my-2">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{task.name}</Card.Title>
                <Card.Text>
                  {/* {task.description.substring(0, 50) + "..."} */}
                  {task.description}
                </Card.Text>
                <Card.Text>
                  <b>Due Date: </b>
                  {task.dueDate}
                </Card.Text>
                <Card.Text>
                  <b>Priority: </b>
                  {task.priority}
                </Card.Text>
                <div className="d-flex justify-content-between mt-5">
                  <div>
                    <Button size="sm" variant="primary" onClick={() => setModalShow(true)}>
                      Details
                    </Button>
                    <Modal show={modalShow} size="sm" aria-labelledby="contained-modal-title-vcenter" centered >
                      <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">Description</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>{task.description}</Modal.Body>
                      <Modal.Footer>
                        <Button onClick={() => setModalShow(false)}>Close</Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                  <div>
                    <Button size="sm" variant="warning">
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      className="ms-2"
                      onClick={() => handleDelete(task.id)}
                    >
                      <i className="bi bi-x-circle-fill"></i>
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;
