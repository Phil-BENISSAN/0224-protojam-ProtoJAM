import React from "react";
import "../Styles/searchBar.css";

function SearchBar() {
  return (
    <section className="contain_searchBar">
      <div className="form-control">
        <input required type="text" />
        <label>
          <span style={{ transitionDelay: "350ms" }}>V</span>
          <span style={{ transitionDelay: "300ms" }}>i</span>
          <span style={{ transitionDelay: "250ms" }}>l</span>
          <span style={{ transitionDelay: "200ms" }}>l</span>
          <span style={{ transitionDelay: "150ms" }}>e</span>
          <span style={{ transitionDelay: "100ms" }}>.</span>
          <span style={{ transitionDelay: "50ms" }}>.</span>
          <span style={{ transitionDelay: "0ms" }}>.</span>
        </label>
      </div>
      <p className="textSearchBar">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quis
        aperiam, nihil magnam pariatur consequatur vero molestiae unde optio!
        Quisquam repellat non tempore saepe voluptatibus facere dolore labore
        porro ratione. Sint enim dicta esse quaerat in ducimus saepe voluptas
        rem aliquam ipsum exercitationem quasi, magnam culpa ipsam cumque magni
        nesciunt voluptatum quis ex voluptatem a accusantium iste tempora.
        Eveniet, magnam. Assumenda deserunt, similique error in suscipit
        voluptatum asperiores expedita ipsam distinctio, ad, quia tenetur quo
        excepturi dolore! Eaque expedita aperiam ullam nihil fugit, adipisci
        sit, natus, animi iusto odit quod? Laborum animi facilis quia unde?
        Laborum numquam architecto, sunt possimus soluta animi aperiam, beatae
        eius aspernatur ad minima, quidem necessitatibus libero voluptates.
        Libero aut non asperiores adipisci recusandae sapiente ipsam? Ad, ea
        optio possimus facilis fugit aperiam facere odio totam tenetur
        praesentium animi error, quam minima! Expedita qui nisi saepe pariatur
        voluptate nihil, ipsam in minima eveniet animi voluptates ullam.
      </p>
    </section>
  );
}

export default SearchBar;
