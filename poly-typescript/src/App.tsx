import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductCreate from "./page/create_product"
import ProductUpdate from "./page/update"
function App() {
  <BrowserRouter>
    <Routes>
      <Route path="homepage">12312313</Route>
      <Route path="products/:id">detail pro</Route>
      <Route path="/admin">
        <Route index></Route>
        <Route path="admin/products/create" element={<ProductCreate></ProductCreate>}></Route>
        <Route path="products/delete/:id"></Route>
        <Route path="/products/update/:id" element={<ProductUpdate></ProductUpdate>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>

}

export default App
