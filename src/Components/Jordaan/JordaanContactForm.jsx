import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Form, Formik} from "formik";
import {Input} from "../Form/Form";
import {ContactFormJordaanSchema} from "../Form/FormSchema";
import {resetForm, sendEmail} from "../../Functions/Utilities";
import Buttons from "../Button/Buttons";


const classNameInputs = "rounded-[5px] py-[15px] px-[20px] w-full bg-lightgray mb-[5px] border-[1px] border-transparent";
const textContactFormContent = 'Laat hier uw gegevens achter, dan nemen contact wij met u op.';
const textContactFormHeader = 'Boek een afspraak';
const textContactFormItems = [
  'Uw naam*',
  'Straatnaam',
  'Huisnummer',
  'Postcode',
  'Woonplaats',
  'Telefoonnummer*',
  'Uw e-mailadres*',
  'Wat is uw hulpvraag?'
];
const textContactFormButton = 'Start nu';

export class JordaanContactForm extends React.Component {


  render() {
    return <Container>
      <Row className="justify-center xs:mx-0 gx-0">
        <Col xl={10} lg={11}
             className="col-12 relative bg-white rounded-[6px] shadow-[0_0_20px_rgba(0,0,0,0.1)] mx-auto overflow-hidden">
          <Row>
            <Col md={4} className="col-12 bg-no-repeat bg-cover overflow-hidden relative bg-center sm:h-[350px]"
                 style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/webp/temp2.webp)`}}></Col>
            <Col md={8} className="col-12 p-24 xs:p-14 md:p-10">
              <h2 className="heading-5 font-serif font-bold text-[#262b35] uppercase tracking-[-1px] w-[90%] mb-[20px]">
                {textContactFormHeader}</h2>
              <p className="w-[90%] lg:w-full mb-[35px]">{textContactFormContent}</p>
              <Formik
                initialValues={{name: "", email: ""}}
                validationSchema={ContactFormJordaanSchema}
                onSubmit={async (values, actions) => {
                  actions.setSubmitting(true)
                  const response = await sendEmail(values)
                  response.status === "success" && resetForm(actions)
                }}
              >
                <Form>
                  <Row>
                    <Col>
                      <Input showErrorMsg={false} type="text" name="name" labelclass="mb-[25px]"
                             className={classNameInputs}
                             placeholder={textContactFormItems[0]}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <Input showErrorMsg={false} type="text" name="street" labelclass="mb-[25px]"
                             className={classNameInputs}
                             placeholder={textContactFormItems[1]}/>
                    </Col>
                    <Col md={4}>
                      <Input showErrorMsg={false} type="text" name="homenumber" labelclass="mb-[25px]"
                             className={classNameInputs}
                             placeholder={textContactFormItems[2]}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <Input showErrorMsg={false} type="text" name="zipcode" labelclass="mb-[25px]"
                             className={classNameInputs}
                             placeholder={textContactFormItems[3]}/>
                    </Col>
                    <Col md={8}>
                      <Input showErrorMsg={false} type="text" name="city" labelclass="mb-[25px]"
                             className={classNameInputs}
                             placeholder={textContactFormItems[4]}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input showErrorMsg={false} type="text" name="phoneNumber" labelclass="mb-[25px]"
                             className={classNameInputs}
                             placeholder={textContactFormItems[5]}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input showErrorMsg={false} type="email" name="email" labelclass="mb-[30px]"
                         className={classNameInputs}
                         placeholder={textContactFormItems[6]}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input showErrorMsg={false} type="text" name="complaint" labelclass="mb-[30px]"
                             className={classNameInputs}
                             placeholder={textContactFormItems[7]}/>
                    </Col>
                  </Row>
                  <Buttons ariaLabel="link for subscribe" type="submit"
                           className={`text-sm leading-none font-medium rounded-[4px] w-full uppercase`}
                           themeColor={["#fd7f87", "#f7aa80"]} color="#fff" size="lg" title={textContactFormButton}/>
                </Form>
              </Formik>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  }
}