import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Row, Col, Card, Button } from "react-bootstrap";
import { TaskState, Task } from "../interface/Task";
import React from "react";

const Dashboard: React.FC = () => {
  const { user } = useAuth0();
  const { tasks } = useSelector((state: TaskState) => state.tasks);
  const userTasks = tasks.filter((item: Task) => item.email === user?.email);

  // getAccessTokenSilently().then((token) => console.log(token));
  console.log(user);
  console.log(tasks);

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
                  {task.description.substring(0, 50) + "..."}
                </Card.Text>
                <div className="d-flex justify-content-between mt-5">
                  <div>
                    <Button size="sm" variant="primary">
                      Details
                    </Button>
                  </div>
                  <div>
                    <Button size="sm" variant="warning">
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                    <Button size="sm" variant="danger" className="ms-2">
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
