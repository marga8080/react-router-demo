import React, {Component} from 'react';

import '../css/Common.css';

import BottomNav from './BottomNav';



class Page1 extends Component {

    _goSubpage() {
        this.props.history.push('/subpage/12345/标题12345');
    }

    render() {
        return (
            <div className="list-main">
                <div>
                    <div style={{marginBottom : 55, fontSize: 'large'}}>
                        <p style={{textAlign:'center'}}>Page1</p>
                        <a onClick={this._goSubpage.bind(this)}>go Subpage</a>
                    </div>
                    {<BottomNav selected="1" history={this.props.history}/>}
                </div>
            </div>
        )
    }

}


export default Page1;