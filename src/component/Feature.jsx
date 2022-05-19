import React, { Component } from 'react';
import '../App.css';
class Feature extends Component {
    state = {}
    render() {
        const { detailproduct } = this.props

        return <div style={{ padding: "12px" }}>

            <table cellSpacing={50}>
                <tr>
                    <td>{detailproduct.Food1}</td>
                    <td>{detailproduct.Food2}</td>
                    {/* <td>{detailproduct.Product3}</td> */}
                </tr>
            </table>
        </div>
    }
}

export default Feature;