"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { CircleHelp, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { ComponentType } from "react";

// Simple interface that works with any form
interface FormData {
  [key: string]: any;
}

type TextInputProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  label: string;
  type?: string;
  name: string;
  toolTipText?: string;
  placeholder?: string;
  forgotPasswordLink?: string;
  icon?: ComponentType<any>;
};

export default function PasswordInput({
  register,
  errors,
  label,
  type = "password",
  name,
  toolTipText,
  icon,
  placeholder,
  forgotPasswordLink,
}: TextInputProps) {
  
  const [passType, setPassType] = useState(type);
  
  return (
    <div>
      <div className="flex space-x-2 items-center">
        <div className="flex items-center justify-between w-full">
          <label
            htmlFor={name}
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {label}
          </label>
          {forgotPasswordLink && (
            <div className="text-sm">
              <Link
                href={forgotPasswordLink}
                className="font-medium text-primary hover:text-primary"
              >
                Forgot password?
              </Link>
            </div>
          )}
        </div>
        {toolTipText && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button type="button">
                  <CircleHelp className="w-4 h-4 text-slate-500" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{toolTipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="mt-2">
        <div className="relative rounded-md">
          {icon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              {React.createElement(icon, { className: "text-slate-300 w-4 h-4" })}
            </div>
          )}
          <input
            id={name}
            type={passType}
            {...register(name, {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
              },
            })}
            className={cn(
              "block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
              errors[name] && "focus:ring-red-500",
              icon && "pl-10"
            )}
            placeholder={placeholder || label}
          />
          <button
            type="button"
            onClick={() =>
              setPassType((prev) => (prev === "password" ? "text" : "password"))
            }
            className="bg-white py-2 px-3 rounded-tr-md rounded-br-md absolute inset-y-0 right-1 my-[2px] flex items-center"
          >
            {passType === "password" ? (
              <Eye className="w-4 h-4 text-slate-600" />
            ) : (
              <EyeOff className="w-4 h-4 text-slate-600" />
            )}
          </button>
        </div>
        {errors[name] && (
          <span className="text-xs text-red-600">
            {String(errors[name]?.message)}
          </span>
        )}
      </div>
    </div>
  );
}