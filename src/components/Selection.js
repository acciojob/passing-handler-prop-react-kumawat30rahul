import React, { useState } from 'react';

const Selection = (props) => {
  const [selectionStyle, updateSelectionStyle] = useState({ background: "" })
  const { applyColor } = props;

  return (
    <div
      className="fix-box"
      style={selectionStyle}
      onClick={() => applyColor(updateSelectionStyle)}
    >
    </div>
  )
}

export default Selection;