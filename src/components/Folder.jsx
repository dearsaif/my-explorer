import React, { useState } from "react";

function Folder({ folderTree, handleInsertNode }) {
  let data = [];
  data = folderTree;

  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visiblity: false,
    isFile: false,
  });
  const displayInput = (e, v) => {
    e.stopPropagation();
    setShowInput({
      visiblity: true,
      isFile: v,
    });
    if (!expand) setExpand(true);
  };
  const handleAddNode = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(data.id, e.target.value, !showInput.isFile);
      setShowInput({ ...showInput, visiblity: false });
    }
  };
  const elem = (
    <div style={{ marginLeft: "20px" }}>
      <span
        className="tree"
        onClick={() => {
          if (data.tree) setExpand(!expand);
        }}
      >
        <span>{data.isFolder ? `📁 ${data.title} ` : `📝 ${data.title} `}</span>
        {data.isFolder && (
          <>
            <button onClick={(e) => displayInput(e, false)}>+📂</button>
            <button
              onClick={(e) => displayInput(e, true)}
              style={{
                color: "transparent",
                textShadow: "0 0 0 #888",
                fontSize: "10px",
              }}
            >
              +📄
            </button>
          </>
        )}
      </span>
      {showInput.visiblity && (
        <div style={{ marginLeft: "20px" }}>
          <span>
            {showInput.isFile ? `📝 ` : `📁 `}
            <input
              type="text"
              placeholder="Type Name"
              onBlur={() => {
                setShowInput({ ...showInput, visiblity: false });
              }}
              onKeyUp={(e) => {
                handleAddNode(e);
              }}
              autoFocus
            />
          </span>
        </div>
      )}
      {data.tree &&
        expand &&
        data.tree.map((d) => (
          <Folder
            handleInsertNode={handleInsertNode}
            folderTree={d}
            key={d.id}
          />
        ))}
    </div>
  );
  return elem;
}

export default Folder;
