/**
 * Created by Administrator on 2017/4/14.
 */

import React, { Component } from 'react';
import BottomNav from './BottomNav';

import '../css/Common.css';

class Page2 extends Component {



    render() {
        return (
            <div className="list-main">
                <div style={{marginBottom : 55, fontSize: 'large'}}>
                    <p style={{textAlign:'center'}}>Page2</p>
                </div>

                {<BottomNav selected="2" history={this.props.history}/>}
            </div>
        )
    }

}


export default Page2;