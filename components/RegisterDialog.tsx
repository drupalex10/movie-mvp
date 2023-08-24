import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Spinner,
} from "@material-tailwind/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { createUser } from "@/prisma/controllers/auth";
import { Service } from "@/core/services/axios";
import { CreateUserInput } from "@/typings";
import LoaderGlobal from "./LoaderGlobal";

export function RegisterDialog() {
  const apiService = new Service();
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("Ta Quang Huy");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
 
  const handleOpen = () => setOpen(!open);

  const handleRegister = async () => {
    setIsLoading(true)
    const data: CreateUserInput = {
      email: email,
      fullName: fullName,
      password: password
    }

    const res: any = await apiService.auth("POST", "/api/auth/register", data);
    
    if (res?.errors?.message) {
      setError(res?.errors?.message)
    } 
      
    setIsLoading(false)
  }
 
  return (
    <>
      <Button variant="outlined" onClick={handleOpen} color="deep-orange">
        Sign up
      </Button>
      <Dialog open={open} handler={handleOpen} color="black">
        <DialogHeader>Sign up</DialogHeader>
        <DialogBody divider>
         <div className="flex flex-col gap-3">
         <Input 
            label="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            color="gray"
          />

          <Input 
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            color="gray"
          />

          <div className="flex relative items-center">
            <Input 
              label="Confirm password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              color="gray"
              type={`${showPassword ? "text" : "password"}`}
              className="pr-6"
            />

            <AiFillEyeInvisible className="absolute right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}/>
          </div>

          <div className="flex relative items-center">
            <Input 
              label="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              color="gray"
              type={`${showPassword ? "text" : "password"}`}
              className="pr-6"
            />

            <AiFillEyeInvisible className="absolute right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}/>
          </div>
         </div>
         <small className="text-red-800">{error}</small>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="outlined"
            color="deep-orange"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="filled" color="deep-orange" className="flex items-center gap-3" disabled={isLoading} onClick={handleRegister}>
            Register
            {isLoading ? (<Spinner className="h-4 w-4"/>) : ""}
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default RegisterDialog;