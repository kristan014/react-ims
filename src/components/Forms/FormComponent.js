import React, { Component } from "react";
import FormInput from "./FormInput";
import FormButtons from "./FormButtons";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class FormComponent extends Component {
  render() {
    return (
      <div className="card p-3" id="card">
        <div className="card-block">
          <form id="form" name="form" encType="multipart/form-data">
            {/*Fields */}
            <Row>
              <FormInput label={"Branch Name"} />
              <FormInput label={"Manager"} />
            </Row>

            {/*Buttons */}
            <Row className="mt-3">
              <Col>
                <Stack direction="horizontal" gap={2}>
                  <FormButtons
                    type={"reset"}
                    color={"btn-secondary"}
                    name={"Cancel"}
                    show={true}
                  />
                  <FormButtons
                    type={"submit"}
                    color={"btn-primary"}
                    name={"Submit"}
                    show={true}
                  />
                  <FormButtons
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
