"use client"

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
import { FormFieldType } from "./forms/PatientForm"

interface CustomFormFieldProps {
  control: Control <any>, 
  fieldType: FormFieldType
}

const CustomFormField = ({control, fieldType, name}: CustomFormFieldProps) => {
  return (
    <FormField
          control={control}
          name="name"
          render={({ field }) => (
            
          )}
        />
  )
}

export default CustomFormField