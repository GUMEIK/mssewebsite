/**
 * 组件需要传递的参数
 * title   ： modal名称
 * visible  : 可见性
 * showModal   ： 图层显示函数
 * hideModal  :     图层隐藏函数
 */
import { Modal } from 'antd';
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
