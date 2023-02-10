import React from "react";
import Form from "react-bootstrap/Form";

function ListBox({ state, packages, packagaName, setSelectedOption }) {
  const renderedRadio =
    packages.length === 0 ? (
      <Form.Select
        aria-label="Default select example"
        className="mt-3 mb-3"
        disabled
        required
      >
        <option>No Package Found</option>
        <option value="#"></option>
      </Form.Select>
    ) : (
      <div>
        <Form.Select
          aria-label="Default select package"
          required
          className="mt-3 mb-3"
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="#">
            --------Total Packages Found----------{packages.length}
          </option>
          {packages.map((pack, index) => (
            <option key={index} name="selectedOption" value={pack}>
              {pack}
            </option>
          ))}
        </Form.Select>
        {/* {packages.map((pack, index) => (
          <div key={index}>
            {pack}

            <input
              type="radio"
              name="selectedOption"
              value={pack}
              required
              defaultChecked={state === `${pack}`}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <br />
          </div>
        ))} */}
      </div>
    );

  return <div>{renderedRadio}</div>;
}

export default ListBox;
