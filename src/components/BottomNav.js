/**
 * Created by Administrator on 2017/4/14.
 */

import React, { Component } from 'react';
import {Row, Col, Icon} from 'antd';
import '../css/BottomNav.css';

class BottomNav extends Component {

    _go(tab) {
        let path = "/";
        switch (tab) {
            case 1 : path = "/"; break;
            case 2 : path = "/page2"; break;
            case 3 : path = "/page3"; break;
            default : path = "/";
        }
        this.props.history.push(path);
    }

    render() {
        let selected = this.props.selected;
        return (
            <div className="bottom-nav" style={{fontSize : 15}}>
                <Row gutter={16} align="middle" justify="center">
                    <Col span={8} style={{textAlign : 'center', color : selected === '1' ? 'red' : 'black'}} onClick={this._go.bind(this, 1)}><Icon type="home" /><p>Pagg1</p></Col>
                    <Col span={8} style={{textAlign : 'center', color : selected === '2' ? 'red' : 'black'}} onClick={this._go.bind(this, 2)}><Icon type="line-chart" /><p>Page2</p></Col>
                    <Col span={8} style={{textAlign : 'center', color : selected === '3' ? 'red' : 'black'}} onClick={this._go.bind(this, 3)}><Icon type="user" /><p>Page3</p></Col>
                </Row>
            </div>
        )
    }
}


export default BottomNav;
