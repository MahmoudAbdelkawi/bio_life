import React , {createContext, useState} from 'react';
import Markup from './markup/markup';

// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Fonts
import "./vendor/line-awesome/css/line-awesome.min.css";
import "./vendor/font-awesome/css/all.min.css";
import "./vendor/themify/themify-icons.css";

// StyleSheet
import './App.scss';

import LanguageContext from './context/LanguageContext';


function App() {
	const [isEnglish, setIsEnglish] = useState(true);
	return (
		<LanguageContext.Provider value={{isEnglish , setIsEnglish}}>
		<div className="page-wraper">
			<Markup />
		</div>
		</LanguageContext.Provider>
	);
}

export default App;