"use client";

import { authLogin } from "@/services/auth";
import { TLoginRequest, TVerifyResponse } from "@/services/auth/types";
import { setSession } from "@/utils/session";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Container() {
  const form = useForm<TLoginRequest>();

  const authLoginMutation = useMutation({
    mutationFn: authLogin,
    onSuccess: (data) => {
      setSession(data.content as TVerifyResponse);

      toast.success(data.message);

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (value: TLoginRequest) => {
    authLoginMutation.mutate({
      email: value.email,
      password: value.password,
    });
  };

  return (
    <section className="flex h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-md border border-black/25">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 p-6 md:p-8">
            <div>
              <h1 className="text-xl font-bold md:text-2xl">Login</h1>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium md:text-base"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...form.register("email")}
                className="rounded-md border-2 border-gray-300 p-2 text-sm md:text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-medium md:text-base"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...form.register("password")}
                className="rounded-md border-2 border-gray-300 p-2 text-sm md:text-base"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 p-2 text-sm text-white transition-colors hover:bg-blue-600 md:p-3 md:text-base"
                disabled={authLoginMutation.isPending}
              >
                {authLoginMutation.isPending ? "Logging in..." : "Login"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
