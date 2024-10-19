import { useState } from "react";

function Todo() {
  const [items, setItems] = useState([]);
  const [addButoon, setAddButton] = useState(false);
  const [newItemText, setNewItemText] = useState("");

  function handleAddButton() {
    setAddButton((prevState) => !prevState);
  }

  function handleForm(e) {
    e.preventDefault();
    handleAddItems();
    setNewItemText("");
    setAddButton(false);
  }

  function handleAddItems() {
    const newItem = {
      id: items.length + 1,
      title: newItemText,
      completed: false,
    };
    setItems((items) => [...items, newItem]);
  }

  function handleRemoveItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleCompleted(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div>
      <Header />
      {items.length > 0 ? (
        <TodoItems
          items={items}
          handleAddButton={handleAddButton}
          handleAddItems={handleAddItems}
          handleRemoveItem={handleRemoveItem}
          handleToggleCompleted={handleToggleCompleted}
        />
      ) : (
        <h2>Add items to your list</h2>
      )}
      {addButoon ? (
        <Form
          newItemText={newItemText}
          setNewItemText={setNewItemText}
          handleForm={handleForm}
        />
      ) : null}
      <Button onClick={handleAddButton}>Add To-do's</Button>
    </div>
  );
}

function Header() {
  return (
    <h1 style={{ display: "flex", justifyContent: "center" }}>
      To-do Application
    </h1>
  );
}

function TodoItems({
  items,
  handleAddButton,
  handleAddItems,
  handleRemoveItem,
  handleToggleCompleted,
}) {
  return (
    <ul>
      {items.map((item) => (
        <TodoList
          item={item}
          handleAddButton={handleAddButton}
          handleAddItems={handleAddItems}
          handleRemoveItem={handleRemoveItem}
          handleToggleCompleted={handleToggleCompleted}
        />
      ))}
    </ul>
  );
}

function TodoList({ item, handleRemoveItem, handleToggleCompleted }) {
  return (
    <>
      <li>
        <h3
          style={{ textDecoration: item.completed ? "line-through" : "none" }}
        >
          {item.title}{" "}
          <input
            type="checkBox"
            checked={item.checked}
            onChange={() => handleToggleCompleted(item.id)}
          />{" "}
          <Button onClick={() => handleRemoveItem(item.id)}>Remove Item</Button>
        </h3>
      </li>
    </>
  );
}

function Form({ setNewItemText, newItemText, handleForm }) {
  return (
    <form onSubmit={handleForm}>
      <input
        type="text"
        placeholder="enter items to add"
        value={newItemText}
        onChange={(e) => setNewItemText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Todo;
