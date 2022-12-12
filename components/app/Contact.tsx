"use client";

import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";

interface Props {}

const Contact = (props: Props) => {
  const { TextArea } = Input;
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const onFinish = (values: any) => {
    messageApi.open({
      key,
      type: "loading",
      content: "Sending...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Thank For Your Message !",
        duration: 2,
      });
    }, 1000);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section className="mt-5 container" id="contact">
      <h3>Contact</h3>

      {contextHolder}

      <Form
        name="contact"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="mt-5"
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Email Is Required !" }]}
        >
          <Input
            type="email"
            size="large"
            placeholder="Your Email ..."
            maxLength={10}
            className="focus:border-teal-500 hover:border-teal-500 dark:bg-transparent dark:placeholder:text-gray-300 dark:text-gray-200"
          />
        </Form.Item>

        <Form.Item
          name="name"
          rules={[{ required: true, message: "Name Is Required !" }]}
        >
          <Input
            size="large"
            placeholder="Your Name ..."
            maxLength={50}
            className="focus:border-teal-500 hover:border-teal-500 dark:bg-transparent dark:placeholder:text-gray-300 dark:text-gray-200"
          />
        </Form.Item>

        <Form.Item
          name="message"
          rules={[{ required: true, message: "Message Is Required !" }]}
        >
          <TextArea
            size="large"
            maxLength={100}
            placeholder="Say Something ..."
            className="focus:border-teal-500 hover:border-teal-500 dark:bg-transparent dark:placeholder:text-gray-300 dark:text-gray-200"
          />
        </Form.Item>

        <Form.Item>
          <button
            type="submit"
            className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-transparent border border-teal-500 hover:text-teal-500 transition-all"
          >
            Send Message
          </button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default Contact;
