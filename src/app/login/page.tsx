"use client";
import Form from "@/components/Form";
import InputField from "@/components/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

const LoginPage = () => {
  //!define validation schema
  const validationSchema = z.object({
    email: z.string().email("Enter valid email").min(1, "Email is required"),
    password: z.string().min(1, "Password is required"),
  });
  const handleLogin = (values: FieldValues) => {
    console.log(values);
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <Form
        onSubmit={handleLogin}
        resolver={zodResolver(validationSchema)}
        defaultValues={{ email: "", password: "" }}
      >
        <div className="flex flex-col space-y-4">
          <InputField name="email" placeholder="Enter password" type="email" />
          <InputField
            name="password"
            placeholder="Enter password"
            type="password"
          />
          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
