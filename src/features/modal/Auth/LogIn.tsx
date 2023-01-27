import { Button, Input } from "@chakra-ui/react";
import React, { PropsWithChildren, useState } from "react";

type LogInProps = {} & PropsWithChildren;

const LogIn: React.FC<LogInProps> = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const setFormValues = () => {
    return (e: React.ChangeEvent<HTMLInputElement>): void => {
      setLoginForm((state) => {
        return { ...state, [e.target.name]: e.target.value };
      });
    };
  };

  const onSubmit=()=>{

  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        name="email"
        type={"email"}
        mb={2}
        placeholder="Email"
        value={loginForm.email}
        onChange={setFormValues()}
      />
      <Input
        name="password"
        placeholder="Password"
        type={"password"}
        mb={2}
        value={loginForm.password}
        onChange={setFormValues()}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};
export default LogIn;
