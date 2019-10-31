import React, { Component } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { HireUs } from "./components/HireUs";
import { Home } from "./components/Home";
import { Works } from "./components/Works";
import { Header } from "./components/Header.js";
import { Menu } from "./components/Menu.js";

const pages = [
  { name: "About", page: <About />, id: 1 },
  { name: "Contact", page: <Contact />, id: 2 },
  { name: "Hire Us", page: <HireUs />, id: 3 },
  { name: "Home", page: <Home />, id: 4 },
  { name: "Works", page: <Works />, id: 5 }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      item: 4,
      ready: true,
      menuIsOpen: false
    };
  }
  scrollSite = y => {
    const { ready } = this.state;

    if (ready) {
      const pageLenght = pages.length - 1;
      if (y < 0) {
        if (this.state.item === pageLenght) {
          this.setState({ item: 0, ready: false });
        } else if (this.state.item < pageLenght) {
          this.setState({ item: this.state.item + 1, ready: false });
        }
      } else {
        if (this.state.item === 0) {
          this.setState({ item: pageLenght, ready: false });
        } else if (this.state.item > 0) {
          this.setState({ item: this.state.item - 1, ready: false });
        }
      }
      setTimeout(() => {
        this.setState({ ready: true }); //
      }, 400);
    }
  };
  openMenuList = () => {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  };
  changePage = i => {
    this.setState({ item: i });
  };
  render() {
    const { item, menuIsOpen } = this.state;
    return (
      <div className={menuIsOpen ? "container act" : "container"}>
        <div
          className={menuIsOpen ? "activem" : null}
          onClick={() => {
            if (menuIsOpen) this.openMenuList();
          }}
        >
          <Header openMenuList={this.openMenuList} />
          <div
            className="content"
            onWheel={e => this.scrollSite(e.nativeEvent.deltaY)}
          >
            <div className="navigation">
              <div className="line-shit"> </div>

              {pages.map((page, i) => (
                <div
                  className="page_item"
                  key={page.id}
                  onClick={() => this.changePage(i)}
                >
                  <span>{item === i ? `0${i + 1}` : null}</span>
                  <div className={item === i ? "dot active" : "dot"}></div>
                  <p
                    style={item !== i ? { color: "grey" } : { color: "white" }}
                  >
                    {item === i ? page.name : `0${i + 1}`}
                  </p>
                </div>
              ))}
            </div>
            <div className={menuIsOpen ? "page disable" : "page"}>
              {pages[item].page}
            </div>
          </div>
        </div>
        {menuIsOpen ? (
          <Menu
            openMenuList={this.openMenuList}
            changePage={this.changePage}
            pages={pages}
            selected={item}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
