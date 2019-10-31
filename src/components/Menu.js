import React from "react";

export const Menu = ({ pages, openMenuList, changePage, selected }) => {
  const handleSelect = id => {
    changePage(id);
    openMenuList();
  };
  return (
    <div className="menu">
      {pages.map(page => (
        <p
          key={page.id}
          id={selected === page.id - 1 ? "selected" : null}
          onClick={() => handleSelect(page.id - 1)}
        >
          {page.name}
        </p>
      ))}
    </div>
  );
};
