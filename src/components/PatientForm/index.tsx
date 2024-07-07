"use client";

import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { userFormValidation } from "@/lib/validation";
import FormFieldCustom from "./FormFieldCustom";
import { FormFieldType } from "@/constants/form";
import SubmitButton from "../SubmitButton";

const PatientForm: FC = () => {
  const form = useForm<z.infer<typeof userFormValidation>>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    resolver: zodResolver(userFormValidation),
  });

  const onSubmit = (data: z.infer<typeof userFormValidation>) => {
    console.log("click");
  };

  return (
    <Form {...form}>
      <section className="mb-12 space-y-4">
        <h1 className="text-2xl font-bold">Hi there 👋</h1>
        <p className="text-dark-700">Schedule your first appointment.</p>
      </section>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormFieldCustom
          control={form.control}
          label="Full name"
          fieldType={FormFieldType.INPUT}
          iconAlt="user"
          iconSrc="/assets/icons/user.svg"
          name="name"
          placeholder="Johnathan Nguyen"
        />

        <FormFieldCustom
          control={form.control}
          label="Email address"
          fieldType={FormFieldType.INPUT}
          iconAlt="email"
          iconSrc="/assets/icons/email.svg"
          name="email"
          placeholder="jonhnathan@gmail.com"
        />

        <FormFieldCustom
          control={form.control}
          label="Phone number"
          fieldType={FormFieldType.PHONE_INPUT}
          iconAlt="phone"
          iconSrc="/assets/icons/user.svg"
          name="phone"
          placeholder="+00 0342 0453 34"
        />

        <SubmitButton isLoading={form.formState.isLoading}>
          Get Started
        </SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
