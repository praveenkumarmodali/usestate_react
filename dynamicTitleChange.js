import { useEffect, useState } from "react";

function DynamicTitleChange() {
  const [title, setTitle] = useState("");

  // Changes title when input value changes
  useEffect(
    function () {
      document.title = title ? `${title}` : "React";
    },
    [title]
  );

  return (
    <div>
      <Header />
      <Form title={title} setTitle={setTitle} />
    </div>
  );
}

function Header() {
  return <h1>Dynamic Value Change</h1>;
}

function Form({ title, setTitle }) {
  return (
    <form>
      <input
        type="text"
        placeholder="exter text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}

export default DynamicTitleChange;
