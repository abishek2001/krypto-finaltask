import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Purchase from '../Purchase/Purchase';

import Trending from '../Trending/Trending';
import StockHistory from '../StockHistory/StockHistory';

export class Home extends Component {
    render() {
        return (
            <div>
                <Tabs >
                    <TabList>
                       
                      
                        <Tab>Purchase Stocks</Tab>
                        <Tab>My Stock History</Tab>
                        <Tab>Trending Stocks</Tab>
                    </TabList>

                    
                    <TabPanel>
                        <Purchase></Purchase>                        
                    </TabPanel>
                    <TabPanel>
                        <StockHistory></StockHistory>
                    </TabPanel>
                    <TabPanel>
                        <Trending></Trending>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default Home
