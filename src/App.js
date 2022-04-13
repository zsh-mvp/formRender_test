import FormRender from './component/FormRender';
import { useForm } from 'form-render';
import Steps from 'antd/lib/steps';
import Button from 'antd/lib/button';
import './App.css';
// import React from 'react';

const { Step } = Steps;
export default function App() {
  // const [current, setCurrent] = React.useState(0);
  const form = useForm();
  const schema = {
    type: 'object',
    properties: {
      orgType: {
        title: '组织类型模板',
        type: 'any',
        widget: 'orgType',
      },
    },
  };
  const steps = [
    {
      title: '租户注册',
      content: 'First-content',
    },
    {
      title: '登陆配置',
      content: 'Second-content',
    },
    {
      title: '安全配置',
      content: 'Last-content',
    },
    {
      title: '区划条线配置',
      content: 'Last-content',
    },
    {
      title: '组织类型模板',
      content: 'Last-content',
    },
    {
      title: '基础属性配置',
      content: 'Last-content',
    },
    {
      title: '枚举属性配置',
      content: 'Last-content',
    },
    {
      title: '租户根节点',
      content: 'Last-content',
    },
  ];
  const onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };
  return (
    <>
      <Steps current={0}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="content-form">
        <FormRender form={form} schema={schema} debug onFinish={onFinish} />
        <Button type="primary" onClick={form.submit}>
          提交
        </Button>
      </div>
    </>
  );
}
