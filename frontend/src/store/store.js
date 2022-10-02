import { configureStore  } from "@reduxjs/toolkit";
import variable from './changeLang'

const store = configureStore({reducer:{lang:variable}});
export default store;

