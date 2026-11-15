import React from "react";
import Navbar from "./components/Navbar";

import SearchSection from "./components/SearchSection.jsx";
import ProductList from "./components/ProductList.jsx";
import ModalForm from "./components/ModalForm.jsx";
import UpdateForm from "./components/UpdateForm";
import UpdateSection from "./components/UpdateSection";

//data
import { products } from "./assets/data/product.js";

//state
import { useState } from "react";

function App() {
  const [data, setData] = useState(products);
  const [inputVal, setInputVal] = useState("");
  const [openModal, setOpenModal] = useState(false);
  // update state
  const [selectedProduct, setSelectedProduct] = useState(null);

  console.log(inputVal);

  function deleteProduct(id) {
    let filteredPord = data.filter((item) => item.id !== id);
    setData(filteredPord);
  }

  function searchProd(text) {
    if (!text.trim().length) {
      setData(products);
      return;
    }
    setData(
      data.filter((item) =>
        item.name.toLocaleLowerCase().includes(text.trim().toLocaleLowerCase()),
      ),
    );
  }
  function showModal() {
    setOpenModal(!openModal);
  }
  function updateProduct(updatedProduct) {
    setData((currentData) =>
      currentData.map((item) =>
        item.id === updatedProduct.id ? updatedProduct : item,
      ),
    );

    setSelectedProduct(null);
  }

  return (
    <div className="min-h-screen bg-[#142634]">
      <header className="py-5 shadow-2xl">
        <Navbar showModal={showModal} />
      </header>
      <main>
        <UpdateSection
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onUpdate={updateProduct}
        />
        <SearchSection searchProd={searchProd} />
        <ProductList
          data={data}
          deleteProduct={deleteProduct}
          onUpdate={setSelectedProduct}
        />
      </main>
      <div>
        {openModal && <ModalForm showModal={showModal} setData={setData} />}
      </div>
    </div>
  );
}

export default App;
