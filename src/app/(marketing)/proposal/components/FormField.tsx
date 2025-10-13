"use client";

import * as React from "react";

type Props = {
  label: string;
  type?: string;
  value: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  textarea?: boolean;
  placeholder?: string;
  required?: boolean;
};

const FormField = ({
  label,
  type = "text",
  value,
  onChange,
  textarea,
  placeholder,
  required,
}: Props) => {
  return (
    <label className="grid gap-2 rounded border border-gray-900 p-2">
      <span className="text-sm text-black/70">{label}</span>
      {textarea ? (
        <textarea
          className="rounded border border-white/10 px-3 py-2 text-white placeholder-white 
               focus:outline-none focus:ring-2 focus:ring-white/20 
               min-h-[300px] w-full"
          value={value as string}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          className="rounded border border-white/50 px-3 py-2 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/20"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      )}
    </label>
  );
};

export default FormField;
