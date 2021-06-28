import React from "react";

function TableField({ fieldName, settingsField }) {
  return (
    <div className="tableField">
      {fieldName}
      {settingsField && (
        <>
          <i className="fas fa-edit"></i>
          <i className="fas fa-trash-alt"></i>
        </>
      )}

      <h1></h1>
    </div>
  );
}

export default TableField;
