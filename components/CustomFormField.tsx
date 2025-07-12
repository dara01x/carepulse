/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

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
import { Control } from "react-hook-form";
import { FormFieldType } from "./forms/PatientForm";
import PhoneInput from 'react-phone-number-input'
import type { E164Number } from 'libphonenumber-js'
import "react-phone-number-input/style.css";
import { FieldValues, ControllerRenderProps } from "react-hook-form";
import Image from "next/image";

interface CustomFormFieldProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: () => React.ReactNode;
}


const RenderField = ({
  field,
  props,
}: {
  field: any;
  props: CustomFormFieldProps;
}) => {
  const { iconSrc, iconAlt, placeholder, fieldType } = props;

 switch (fieldType) {
  case FormFieldType.INPUT:
    return (
      <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
            src={iconSrc}
            alt={iconAlt || "Icon"}
            width={24}
            height={24}
            className="m-2"
            />
          )}

          <FormControl>
            <Input
            placeholder={placeholder || "Enter value"}
            {...field}
            className="Shad-input border-0"
            />
          </FormControl>
      </div>
    )

    case FormFieldType.PHONE_INPUT:
      return (
        

          <FormControl>
            <PhoneInput 
            defaultCountry="IQ" 
            placeholder={placeholder || "Enter phone number"}
            international
            value={field.value as E164Number | undefined} 
            onChange={field.onChange}
            className="input-phone"
            />
          </FormControl>
      
      )

  default:
    return null;
  }
};


const CustomFormField = (props: CustomFormFieldProps) => {
  const {  control,  fieldType,  name,  label} = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}

          <RenderField field={field} props={props}/>
          <FormMessage className="shad-error"/>
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
