import React, {Component} from 'react';
import './TxNavLink.css';

class TxNavLink extends Component {

    click = (txid) => {
        this.props.txLinkClick(txid);
    };

    render() {
        return (
            <div className="tx-nav-link-wrapper">
                {this.props.row.step && this.props.row.step.txid &&
                <div className="tx-link">
                    <span className="type">TX</span>
                    <span className="txid" onClick={this.click.bind(this, this.props.row.step.txid)}>{this.props.row.step.txid}</span>
                </div>
                }
            </div>
        )
    }
}

export default TxNavLink;
