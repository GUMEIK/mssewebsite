import { List, Avatar } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import React, { Component } from 'react'
const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);
export default class CommentsCom extends Component {
  shouldComponentUpdate(preProps,preState){
    if(preProps !== this.props){
      return true;
    }
    return false;
  }
  render() {
    return (
      <List
      header={`  共${this.props.comments ? this.props.comments.length: 0}条评论：`}
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={this.props.comments}
      footer={
        <div>
          <b>谷美：</b> 一个文武双全的程序员呀～
        </div>
      }
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <IconText icon={StarOutlined} text="" key="list-vertical-star-o" />,
            <IconText icon={LikeOutlined} text="" key="list-vertical-like-o" />,
            <IconText icon={MessageOutlined} text="" key="list-vertical-message" />,
          ]}
          // extra={
          //   <img
          //     width={272}
          //     alt="logo"
          //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          //   />
          // }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
    )
  }
}
