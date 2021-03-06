
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); /* remove this after React 1.0 comes out */

// puts all the individual Components into final version
import Banner from '../Components/Banner';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import SearchBox from '../Components/SearchBox';
import ProductItemsGrid from '../Components/ProductItemsGrid';
import muiTheme from '../lib/defaultMuiTheme';
import parseResponse from '../lib/parseResponse'

function FullPage({products}) {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div className="main-col">
                <Banner />
                <Navbar hideTabs={['Search']} />
                <SearchBox />
                <ProductItemsGrid products={products}/>
                <Footer />
            </div>
        </MuiThemeProvider>
    );
}

$.get("/api/GetHomepageProducts/", function(products){
    products = parseResponse(products);
    ReactDOM.render(
        <FullPage products={products} />,
        document.getElementById('app')
    );
}.bind(this));
