"use client";

import * as React from "react";

type BaseProps = {
  label: string;
  helperText?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
};

type InputVariant = BaseProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> & {
    as?: "input";
    inputClassName?: string;
  };

type TextareaVariant = BaseProps &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> & {
    as: "textarea";
    textareaClassName?: string;
  };

export type FormFieldProps = InputVariant | TextareaVariant;

const baseContainer =
  "grid gap-2 rounded border border-white/10 bg-white/0 p-2";
const baseLabel = "text-sm text-black/70";
const baseControl =
  "rounded border border-white/10 bg-black/15 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20";

const FormField = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormFieldProps
>((props, ref) => {
  if (props.as === "textarea") {
    const {
      label,
      helperText,
      error,
      containerClassName,
      labelClassName,
      textareaClassName,
      ...rest
    } = props as TextareaVariant;
    return (
      <label className={`${baseContainer} ${containerClassName ?? ""}`}>
        <span className={`${baseLabel} ${labelClassName ?? ""}`}>{label}</span>
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          className={`${baseControl} ${textareaClassName ?? ""} min-h-[100px]`}
          {...rest}
        />
        {helperText && !error && (
          <span className="text-xs text-white/50">{helperText}</span>
        )}
        {error && <span className="text-xs text-rose-400">{error}</span>}
      </label>
    );
  }

  const {
    label,
    helperText,
    error,
    containerClassName,
    labelClassName,
    inputClassName,
    ...rest
  } = props as InputVariant;
  return (
    <label className={`${baseContainer} ${containerClassName ?? ""}`}>
      <span className={`${baseLabel} ${labelClassName ?? ""}`}>{label}</span>
      <input
        ref={ref as React.Ref<HTMLInputElement>}
        className={`${baseControl} ${inputClassName ?? ""}`}
        {...rest}
      />
      {helperText && !error && (
        <span className="text-xs text-white/50">{helperText}</span>
      )}
      {error && <span className="text-xs text-rose-400">{error}</span>}
    </label>
  );
});
FormField.displayName = "FormField";

export default FormField;
