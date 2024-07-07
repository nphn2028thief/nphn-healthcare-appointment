import Image from "next/image";
import { InputHTMLAttributes, ReactNode } from "react";
import {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/core";
import "react-phone-number-input/style.css";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormFieldType } from "@/constants/form";

interface IProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<T>;
  label?: string;
  fieldType: FormFieldType;
  iconSrc?: string;
  iconAlt?: string;
  name: Path<T>;
  dateFormat?: string;
  showTimeSelect?: string;
  renderSkeleton?: (field: any) => ReactNode;
  children?: ReactNode;
}

const FormFieldCustom = <T extends FieldValues>(props: IProps<T>) => {
  const {
    control,
    label,
    fieldType,
    iconSrc,
    iconAlt,
    dateFormat,
    showTimeSelect,
    renderSkeleton,
    children,
    name,
    ...rest
  } = props;

  const renderField = (field: ControllerRenderProps<T, Path<T>>) => {
    switch (fieldType) {
      case FormFieldType.INPUT:
        return (
          <div className="flex border border-dark-500 bg-dark-400 rounded-md">
            {iconSrc && (
              <Image
                src={iconSrc}
                alt={iconAlt || "icon"}
                width={24}
                height={24}
                className="ml-[10px]"
              />
            )}
            <FormControl>
              <Input {...rest} {...field} className="shad-input border-0" />
            </FormControl>
          </div>
        );
      case FormFieldType.PHONE_INPUT:
        return (
          <FormControl>
            <PhoneInput
              {...rest}
              defaultCountry="VN"
              international
              className="input-phone"
              value={field.value as E164Number}
              onChange={field.onChange}
            />
          </FormControl>
        );
      default:
        break;
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && fieldType !== FormFieldType.CHECKBOX && (
            <FormLabel>{label}</FormLabel>
          )}
          {renderField(field)}
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default FormFieldCustom;
