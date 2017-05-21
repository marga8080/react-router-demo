/**
 * Created by Administrator on 2017/4/14.
 */

import React, { Component } from 'react';
import BottomNav from './BottomNav';

class Page3 extends Component {


    render() {
        return (
            <div>
                <div style={{marginBottom : 55, fontSize: 'large'}}>
                    <p style={{textAlign:'center'}}>Page3</p>

                </div>

                {<BottomNav selected="3" history={this.props.history}/>}
            </div>
        )
    }
}


export default Page3;