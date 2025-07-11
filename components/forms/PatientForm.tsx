"use client" // this is to let next.js know that it should run this in the client side

import { z } from "zod" 
import { useForm } from "react-hook-form" 
import { zodResolver } from "@hookform/resolvers/zod"  
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"

export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton",
}

const formSchema = z.object({
    username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
})

const PatientForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    
    console.log(values)
  }

  return (

    <Form {...form}>

            
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">

        <section className="mb-12 space-y-4">
            <h1 className="header">Welcome</h1>
            <p className="text-dark-700">Schedule your appointment </p>
        </section>

        <CustomFormField 
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="name"
        label= "Full Name"
        placeholder="Enter your full name"
        iconSrc="/assets/icons/user.svg"
        iconAlt="User"

/>

        <Button type="submit">Submit</Button>
      </form>
      
    </Form>
  )
}

export default  PatientForm