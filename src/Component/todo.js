import React, { useState } from "react";
import Img from "../Images/todo.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [editItem, seteditItem] = useState(null);
  const addItem = () => {
    if (!inputData) {
      alert("plaese write the item ");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((ele) => {
          if (ele.id === editItem) {
            return { ...ele, name: inputData };
          }
          return ele;
        })
      );
      setInputData("");
      setToggleSubmit(true);
      seteditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };
  const deleteItem = (index) => {
    const UpdatedItems = items.filter((ele) => {
      return ele.id !== index;
    });
    setItems(UpdatedItems);
  };

  const delteAll = () => {
    return setItems([]);
  };

  const updateItem = (index) => {
    let item = items.find((ele) => {
      return ele.id === index;
    });
    setToggleSubmit(false);
    setInputData(item.name);
    seteditItem(index);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={Img} alt="todoimg"></img>
            <figcaption>Add Your List Here 📒</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder=" ✍️ write Your Note Here..."
              value={inputData}
              onChange={(event) => {
                setInputData(event.target.value);
              }}
            />
            {toggleSubmit ? (
              <i
                className="fa fa-solid fa-plus add-btn "
                title="update item"
                onClick={addItem}
              ></i>
            ) : (
              <i
                class="far fa-edit  add-btn"
                title="edit item"
                onClick={addItem}
              ></i>
            )}
          </div>
          <div className="showItems">
            {items.map((ele) => {
              return (
                <div className="eachItem" key={ele.id}>
                  <h3>{ele.name}</h3>
                  <div className="todo-btn">
                    <i
                      class="far fa-edit  add-btn"
                      title="edit item"
                      onClick={() => updateItem(ele.id)}
                    ></i>
                    <i
                      class="far fa-trash-alt  add-btn"
                      title="delte item"
                      onClick={() => deleteItem(ele.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All "
              onClick={delteAll}
            >
              <span>CHECK LIST</span>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
