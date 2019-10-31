import React, { useState } from "react";
import { sevicesList } from "../data/dataArrey";

export const HireUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [selectedItems, changeSelectedItems] = useState([]);

  const submit = e => {
    e.preventDefault();
    if (name && email) {
      setName("");
      setEmail("");
      changeSelectedItems([]);
    } else {
      setError(true);
      const time = setTimeout(() => {
        setError(false);
        clearTimeout(time);
      }, 1000);
    }
  };

  const checkItemStatus = it => {
    if (selectedItems.find(item => item === it)) {
      changeSelectedItems(selectedItems.filter(item => item !== it));
      console.log(selectedItems);
    } else {
      changeSelectedItems([...selectedItems, it]);
      console.log(selectedItems);
    }
  };
  return (
    <div className="hireus">
      <h1>You want us to do</h1>
      <div className="list">
        <div className="list_first">
          {sevicesList.slice(0, 3).map(item => (
            <div
              className="first"
              key={item.id}
              onClick={() => checkItemStatus(item.id)}
            >
              {selectedItems.indexOf(item.id) > -1 ? <span>✔</span> : null}
              {item.text}
            </div>
          ))}
        </div>
        <div className="list_second">
          {sevicesList.slice(3).map(item => (
            <div
              className="second"
              key={item.id}
              onClick={() => checkItemStatus(item.id)}
            >
              {selectedItems.indexOf(item.id) > -1 ? <span>✔</span> : null}
              {item.text}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={e => submit(e)} className="form">
        <div className="authorization">
          <div className="form">
            <input
              type="text"
              onChange={e => setName(e.target.value)}
              value={name}
              required
              name="year"
              autoComplete="off"
            />
            <label className="label-name">
              <span className="content-name">Name</span>
            </label>
          </div>
          <div className="form">
            <input
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              required
              name="year"
              autoComplete="off"
            />
            <label className="label-name">
              <span className="content-name">Email</span>
            </label>
          </div>
        </div>

        <button type="submit" className={error ? "error" : null}>
          Send request
        </button>
      </form>
    </div>
  );
};
