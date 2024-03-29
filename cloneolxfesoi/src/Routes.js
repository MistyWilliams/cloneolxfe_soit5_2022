import React from 'react';
import { Switch } from 'react-router-dom';
import RouterHandler from './components/RouterHandler';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import AddAd from './pages/AddAd';
import Ads from './pages/Ads';
import MyAccount from './pages/MyAccount';

export default () => {
   return (
      <Switch>   
           <RouterHandler exact path="/">
               <Home />
            </RouterHandler>   
           <RouterHandler exact path="/about">
               <About />
           </RouterHandler>
           <RouterHandler exact path="/signin">
               <SignIn />
           </RouterHandler>
           <RouterHandler exact path="/signup">
              <SignUp />
           </RouterHandler>    
         <RouterHandler exact path="/ad/:id">
            <Ads />
            </RouterHandler>
         <RouterHandler exact path="/ads">
            <AdPage />
         </RouterHandler>        
         <RouterHandler private exact path='/post-an-ad'>
            <AddAd/>
         </RouterHandler>
         <RouterHandler private exact path='/my-account'>
            <MyAccount />
         </RouterHandler>
        <RouterHandler path='*'>
             <NotFound />
           </RouterHandler>
           </Switch>
   )
}