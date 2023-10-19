import React, { Component } from "react";
import FormInputComponent from "./FormInputComponent";
import FormButtonComponent from "./FormButtonComponent";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: '',
    }

    // createRef is used to call a method from child component
    this.child = React.createRef();

    this.onSubmit = this.onSubmit.bind(this);
  }

  //solved the no-op mount error
  componentDidMount() {
    this.load();
  }

  // call the api source 
  load = async () => {
    let component = (await this.props.apiSource).default;
    this.setState({ component: component });
  };

  
  // submit the form
  onSubmit = (event) => {
    event.preventDefault();

    // if state is null it will not execute
     this.state !== null && 
        // if props id is not null it will not create, instead it will update
        this.props.values.id === '' ?
          this.child.current.create(this.props.values) : 
          this.child.current.update(this.props.values)
    
  };

  render() {

    return (
      <div className="card p-3" id="card">

        {/* reference the child api component */}
        {this.state.component !== "" && (
          <this.state.component ref={this.child} />
        )}

        <div className="card-block">
          <form id="form" name="form" onSubmit={this.onSubmit}>
            {/*Fields */}
            <Stack gap={3}>
              {Object.keys(this.props.labels).map((key, index1, array) => {
                if ((index1 + 1) % 4 === 0 || index1 === 0) {

                  // index for slicing inner loop
                  let indexStart = index1 % 4 === 0 ? index1 : index1+1
                  let indexEnd = index1 % 4 === 0 ? index1+4 : index1+5

                  return (
                    <Row key={index1}>
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
