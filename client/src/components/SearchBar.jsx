import React from "react";
import "../Styles/searchBar.css"

function SearchBar() {

  return (
    <section className="contain_searchBar">
      <div className="form-control">
            <input required type="text" />
            <label>
                <span style={{ transitionDelay: '350ms' }}>V</span>
                <span style={{ transitionDelay: '300ms' }}>i</span>
                <span style={{ transitionDelay: '250ms' }}>l</span>
                <span style={{ transitionDelay: '200ms' }}>l</span>
                <span style={{ transitionDelay: '150ms' }}>e</span>
                <span style={{ transitionDelay: '100ms' }}>.</span>
                <span style={{ transitionDelay: '50ms' }}>.</span>
                <span style={{ transitionDelay: '0ms' }}>.</span>
            </label>
        </div>
    </section>
  );
}

export default SearchBar;
