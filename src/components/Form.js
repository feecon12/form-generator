import React, { useState } from "react";
import Radio from "./AllFields/Radio";
import Checkbox from "./AllFields/Checkbox";
import Text from "./AllFields/Text";
import TextArea from "./AllFields/TextArea";
import Dropdown from "./AllFields/Dropdown";

const Form = () => {
  //initialise state to hold fields
  const [fields, setFields] = useState([]);

  //fucntion to add new field
  const addField = (type) => {
    setFields([...fields, { type }]);
  };

  //function to remove field
  const removeField = (index) => {
    setFields(fields.filter((field, i) => i !== index));
  };

  //submit the form
  const submit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <div className="dynamic-form">
      <h2>Dynamic form</h2>
      <div className="form-buttons">
        <button onClick={() => addField("text")}>Add Text</button>
        <button onClick={() => addField("textarea")}>Add Textarea</button>
        <button onClick={() => addField("checkbox")}>Add Checkbox </button>
        <button onClick={() => addField("radio")}>Add Radio</button>
        <button onClick={() => addField("dropdown")}>Add Dropdown </button>
      </div>
      <form>
        {fields.map((field, index) => (
          <div key={index} className="form-field">
            {field.type === "text" && <Text type="text" />}
            {field.type === "textarea" && <TextArea />}
            {field.type === "checkbox" && <Checkbox />}
            {field.type === "radio" && <Radio />}
            {field.type === "dropdown" && <Dropdown />}
            <button onClick={() => removeField(index)}>Remove</button>
          </div>
        ))}
      <button onClick={submit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
