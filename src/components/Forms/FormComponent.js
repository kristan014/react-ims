import React, { Component } from "react";
import FormInputComponent from "./FormInputComponent";
import FormButtonComponent from "./FormButtonComponent";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }


  
  // submit the form
  onSubmit = (event) => {
    event.preventDefault();
    // if props id is not null it will not create, instead it will update
        this.props.values.id === '' ?
          this.props.dataSource.current.create(this.props.values) : 
          this.props.dataSource.current.update(this.props.values)
    
  };

  render() {

    return (
      <div className="card p-3" id="card">     
        <div className="card-block">
          <form id="form" name="form" onSubmit={this.onSubmit}>
            {/* Input fields */}
            <Stack gap={3}>
              {Object.keys(this.props.labels).map((key, index1, array) => {
              {/* this will make the layout to 4 input fields per row */}
                if ((index1 + 1) % 4 === 0 || index1 === 0) {

                  // index for slicing inner loop
                  let indexStart = index1 % 4 === 0 ? index1 : index1+1
                  let indexEnd = index1 % 4 === 0 ? index1+4 : index1+5

                  return (
                    <Row key={index1}>
                    {/* this slice map displays the start after tha last input field ends until the indexEnd meet*/}
                      {array.slice(indexStart,indexEnd).map((key, index2) => { 
                        return (
                          <FormInputComponent
                            key={index2}
                            label={this.props.labels[key]}
                            name={key}
                            value={this.props.values[key]}
                            setValues={this.props.setValues}
                          />
                        );
                      })}
                    </Row>
                  );
                }
                return null;
              })}
            </Stack>

            {/* Buttons */}
            <Row className="mt-3">
              <Col>
                <Stack direction="horizontal" gap={2}>
                  {/* Cancel Button */}
                  <FormButtonComponent
                    type={"reset"}
                    color={"btn-secondary"}
                    name={"Cancel"}
                    show={true}
                  />

                  {/* Submit Button */}
                  <FormButtonComponent
                    type={"submit"}
                    color={"btn-primary"}
                    name={"Submit"}
                    show={true}
                  />

                  {/* Update Button */}
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
