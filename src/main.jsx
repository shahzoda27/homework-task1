import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { store } from './store/index';
//import './index.css'
import { ProductsSlice } from './features/products/ProductsSlice.js'
import { BrandSlice } from './features/brands/BrandsSlice.js'
import { ModelsSlice } from './features/models/ModelsSlice.js'
import ProductsLists from './features/products/ProductsLists.jsx'
import Brands from './features/brands/Brands.jsx'
import Models from './features/models/Models.jsx'
store.dispatch(ProductsSlice.endpoints.getProducts.initiate())
store.dispatch(BrandSlice.endpoints.getBrand.initiate())
store.dispatch(ModelsSlice.endpoints.getModel.initiate())
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='products' element={<ProductsLists />}/>
          <Route path='brands' element={<Brands />}/>
          <Route path='models' element={<Models/>}/>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)
