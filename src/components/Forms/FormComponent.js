import React, { Component } from "react";
import FormInputComponent from "./FormInputComponent";
import FormButtonComponent from "./FormButtonComponent";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class FormComponent extends Component {
  render() {
    this.temp = 0;

    return (
      <div className="card p-3" id="card">
        <div className="card-block">
          <form id="form" name="form" encType="multipart/form-data">
            {/*Fields */}

            <Stack gap={3}>
              {Object.keys(this.props.labels).map((key, index1, test) => {

                if ((index1 + 1) % 4 === 0 || index1 === 0) {
                  return (
                    <Row key={index1}>

                      {test.map((key, index2) => {
                        this.temp++;
                        if (this.temp > test.length) {
                          return null
                        }

                        return <FormInputComponent key={index2} label={this.props.labels[key]} />
                      })}

                    </Row>
                  )
                }
                return null
              })}
            </Stack>

            <Row className="mt-3">
              <Col>
                <Stack direction="horizontal" gap={2}>
                  <FormButtonComponent
                    type={"reset"}
                    color={"btn-secondary"}
                    name={"Cancel"}
                    show={true}
                  />
                  <FormButtonComponent
                    type={"submit"}
                    color={"btn-primary"}
                    name={"Submit"}
                    show={true}
                  />
                  <FormButtonComponent
                    type={"submit"}
                    color={"btn-primary"}
                    name={"Update"}
                    show={false}
                  />
                </Stack>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    );
  }
}

export default FormComponent;
