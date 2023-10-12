import React, { Component } from "react";
import FormInputComponent from "./FormInputComponent";
import FormButtonComponent from "./FormButtonComponent";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class FormComponent extends Component {

  render() {
    return (
      <div className="card p-3" id="card">
        <div className="card-block">
          <form id="form" name="form" encType="multipart/form-data">
            <Stack gap={2}>
            {/*Fields */}
            <Row>
              <FormInputComponent label={"Branch Name"} />
              <FormInputComponent label={"Manager"} />
              <FormInputComponent label={"Contact No"} />
              <FormInputComponent label={"Email"} />
            </Row>

            <Row>
              <FormInputComponent label={"Region"} />
              <FormInputComponent label={"Barangay"} />
              <FormInputComponent label={"City"} />
              <FormInputComponent label={"Zip Code"} />
            </Row>

            <Row>
              <FormInputComponent label={"Street Name"} />
              <FormInputComponent label={"Unit FLoor"} />
            </Row>
           </Stack>
            {/*Buttons */}
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
