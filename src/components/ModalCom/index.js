import { Modal, Button } from 'antd';
import React from 'react'
export default class App extends React.Component {
  showModal = () => {
    this.props.showModal && this.props.showModal();
  };

  handleOk = e => {
    this.props.hideModal && this.props.hideModal();
  };

  handleCancel = e => {
    this.props.hideModal && this.props.hideModal();
  };
  render() {
    return (
      <div>
        <Modal
          title={this.props.title}
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="85%"
        >
          {this.props.children && this.props.children}
        </Modal>
      </div>
    );
  }
}
