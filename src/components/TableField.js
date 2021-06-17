import React from "react";

function TableField({ fieldName, settingsField }) {
  return (
    <div className="tableField">
      {fieldName}
      {settingsField && (
        <>
          <i className="fa-solid fa-pen-to-square"></i>
          <i className="fa-solid fa-trash"></i>
        </>
      )}

      <h1></h1>
    </div>
  );
}

export default TableField;
