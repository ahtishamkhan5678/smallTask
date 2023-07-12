import React from 'react';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import MainRoute from './components/MainRoute';

const App = () => {
  return (
  
  <>
      <Navbar/>
      <MainRoute/>
  </>
    // <Router>
    //   <div>
    //     <Navbar />
    //     {/* <Switch>
    //       <Route exact path="/" component={Home} />
    //       <Route path="/blog" component={Blog} />
    //       <Route path="/product" component={Product} />
    //       <Route path="/register" component={Register} />
    //       <Route path="/login" component={Login} />
    //     </Switch>
    //   </div> */}
    // </Router>
   
  );
};

export default App;
