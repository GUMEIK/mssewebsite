import { message, Comment, Avatar, Form, Button, List, Input } from 'antd';
import React from 'react'
import CommentsCom from '../commentsCom';
import { getComments, addComments } from '../../API/comments'
const { TextArea } = Input;
class App extends React.Component {
  state = {
    comments: [],
    submitting: false,
  };
  mapResToAntd(el) {
    return {
      href: 'http://ant.design',
      title: `${el.user_name}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: `创建时间：${el.ctime}-邮箱：${el.email}`,
      content: `${el.comments}`
    }
  }
  handleSubmit = () => {
    console.log(this.state.value)
    // 提交评论
    if (!this.state.value) {
      return;
    }
    this.setState({
      submitting: true,
    });
    getComments().then(res => {
      res = res.map(el => {
        return this.mapResToAntd(el)
      })
      this.setState({
        submitting: false,
        comments: res.reverse()
      })
    })
  };

  handleChange = e => {
    console.log( e.target.value)
  };
  componentDidMount() {
    getComments().then(res => {
      res = res.map(el => {
        return this.mapResToAntd(el)
      })
      this.setState({
        comments: res.reverse()
      })
    })
  }
  render() {
    const { comments, submitting } = this.state;
    return (
      <div>
        {/* {comments.length > 0 && <CommentList comments={comments} />} */}
        <CommentsCom comments={comments} />
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
                <Form
                onFinish={(value) => {
                  if (!value.user_name) {
                    message.warning("最起码也要输个昵称的嘛！");
                    return;
                  }else if(!value.email){
                    message.info("输个邮箱联系一下嘛！实在不想输也没关系咯！")
                  }
                  const data = {
                    userName: value.user_name,
                    comments: value.comments,
                    email:value.email
                  }
                  addComments(data).then(res => {
                    const msg = res.msg;
                    getComments().then(res=>{
                      res = res.map(el => {
                        return this.mapResToAntd(el)
                      })
                      this.setState({
                        comments: res.reverse()
                      },()=>{
                        message.success(msg)
                      })
                    })
                  });
                }}
              >
                <Form.Item name="user_name">
                  <Input placeholder="请输入尊姓大名" />
                </Form.Item>
                <Form.Item name="email">
                  <Input placeholder="请输入邮箱地址" />
                </Form.Item>
                {/* <Form.Item name="description">
                  <Input placeholder="如果上面两条是随便输入的，那么就提示我想一下你是谁哈"/>
                </Form.Item> */}

                <Form.Item name="comments">
                  <TextArea
                    placeholder="要是上面的信息都不真实，说点儿能让我想起你来的事情哦！"
                    rows={4} onChange={this.handleChange} />
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit" loading={submitting} onClick={this.handleSubmit} type="primary">
                    Add Comment
                  </Button>
                </Form.Item>
              </Form>
          }
        />
      </div>
    );
  }
}
export default App;