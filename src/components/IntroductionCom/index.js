// 自我介绍组件
import { Typography, Divider } from 'antd';
import React from 'react'
const { Title, Paragraph, Text } = Typography;
const IntroductionCom = ()=>(
  <Typography>
    <Title>自我介绍</Title>
    <Paragraph>
      自恋的概括：<Text mark>一个文武双全的程序员</Text>。喜欢在春天的午后弹吉他，在夏末的黄昏打篮球，会听着      <Text strong>《平凡之路》</Text>跑着10公里的步，也会在下雨天翻看着厚厚的 <Text strong>《百年孤独》</Text>;  喜欢猫咪趴在腿上看我写代码，也会在代码上花心思为博得人儿
      一笑，喜欢看秋天路中央的落叶，喜欢玩儿冬天的雪;喜欢呆在户外的时光，但在屋子里面写代码也会让我感觉很爽。<Text strong>热爱人与自然，不舍爱与自由</Text>。
    </Paragraph>
    <Paragraph>
      你好呀，我将违背我的天性，忤逆我的本能，永远爱你。
    </Paragraph>
    <Title level={2}>相关链接</Title>
    <Paragraph>
      主要的营地是（<Text code>GitHub</Text> 和
      <Text code>微信公众号</Text>）
    </Paragraph>

    <Paragraph>
      <ul>
        <li>
          <a href="https://github.com/GUMEIK">GitHub</a>
        </li>
        <li>
          <a href="https://gitee.com/gumeik">码云</a>
        </li>
        <li>
          微信公众号:梅苏十二
        </li>
      </ul>
    </Paragraph>
  </Typography>
);
  export default IntroductionCom;