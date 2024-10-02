import { useState } from "react";
import "./App.css";
import folderData from "./folderData";
import Folder from "./components/Folder";
import useTree from "./hooks/useTree";

function App() {
  const [data, setData] = useState(folderData);
  const { insertNode } = useTree();
  const handleInsertNode = (id, title, isFolder) => {
    const finalTree = insertNode(data, id, title, isFolder);
    console.log(finalTree);
    setData(finalTree);
  };

  return (
    <>
      <Folder handleInsertNode={handleInsertNode} folderTree={data} />
    </>
  );
}

export default App;
