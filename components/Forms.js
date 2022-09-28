import React from "react";
import { Formik, Form, useField, useFormikContext, Field} from "formik";
import MyInput from "./MyInput";
class FormikForm extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          items: this.props.items
      }
    };
    getTotal() {
    var a = document.calculator.first.value;
    var b = document.calculator.second.value;
    if(document.calculator.action.value == "plus"){
      let c = Number(a) + Number(b);
      alert(c)
    }
    else if(document.calculator.action.value == "minus"){
      let c = a-b;
      alert(c)
    }
    else if(document.calculator.action.value == "multiplication"){
      let c = a*b;
      alert(c)
    }
    else if(document.calculator.action.value == "divide"){
      if(b==0){
        alert("Nie dzielimy przez 0")
      }
      else{
      let c = Number(a) / Number(b);
      alert(c)
      }
    }
    else if(document.calculator.action.value == "divide2"){
      if(b==0){
        alert("Nie dzielimy przez 0")
      }
      else{
      let c = (a%b);
      alert(c)
    }
  }
    else if(document.calculator.action.value == "degree"){
      let c = Math.pow(a, b);
      alert(c)
    }
}
  render(){
    return(
    <div>

      <Formik
        initialValues={{
          first: 1,
          second: 1,
          category: ""
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="w-200" name="calculator">
                <MyInput label="first - " name="first" type="number" />       
                <MyInput label="second - " name="second" type="number" />
                <Field name="action" component="select">
                    <option value="plus">+</option>
                    <option value="minus">-</option>
                    <option value="multiplication">*</option>
                    <option value="divide">/</option>
                    <option value="divide2">%</option>
                    <option value="degree">**</option>
                </Field>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block mt-2"
                  onClick={this.getTotal}
                >
                  Start
                </button>
        </Form>
      </Formik>
    </div>
  );
};
};
export default FormikForm;
