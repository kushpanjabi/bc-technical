import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

export default function DisplayCard(props) {
    return (
        <div>
            <div className="site-card-border-less-wrapper card" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Card title={props.data.name} bordered={true} style={{ width: 300 }}>
                    <div className="fruit-img-container">
                        <img src={props.data.image} alt="fruit pic" />
                    </div>
                    <p className="weight">Weight: {props.data.weight} grams</p>
                </Card>
            </div>
        </div>
    )
}
