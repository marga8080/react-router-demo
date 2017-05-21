/**
 * Created by Administrator on 2017/5/21.
 */
import React, { Component } from 'react';
import {Row, Col, Icon} from 'antd';

import '../css/Common.css';

export default class Subpage extends Component {

    constructor(props) {
        super(props);
        this.state = {id : null , name : null};
    }

    componentDidMount() {
        let params = this.props.match.params;
        this.setState(params)
    }

    _goBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="detail-main">
                <Row style={{backgroundColor : '#52BDFB', paddingTop : 5, paddingBottom : 5, fontSize : 18}}>
                    <Col span={8}>
                        <a style={{color : 'white', paddingLeft : 5}} onClick={this._goBack.bind(this)}> <Icon type="left" />Back </a>
                    </Col>
                    <Col span={8} style={{textAlign : 'center',color : 'white'}}> Subpage </Col>
                    <Col span={8} style={{textAlign : 'right', color : 'white'}}> </Col>
                </Row>

                <div className="overflow-scrolling" style={{overflow:'auto',height:'100%',padding : 8}}>
                    <p>接收到的参数：</p>
                    <p>id:{this.state.id}</p>
                    <p>name:{this.state.name}</p>
                </div>
            </div>
        );
    }

}