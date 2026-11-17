import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircleIcon, ChevronDownIcon } from 'lucide-react';
import { FieldConfig } from '../../types/forms';
import { EASE } from '../../utils/motion';

type FormFieldProps = {
  field: FieldConfig;
  formId: string;
  value: string;
  error?: string;
  onChange: (name: string, value: string) => void;
  onBlur: (name: string) => void;
};

export function FormField({ field, formId, value, error, onChange, onBlur }: FormFieldProps) {
  const [focused, setFocused] = useState(false);
  const id = `${formId}-${field.name}`;
  const errId = `${id}-error`;
  const type = field.type ?? 'text';
  const floated = focused || value !== '';

  const shell = `w-full rounded-[14px] border bg-white text-[15px] text-ink outline-none transition-[border-color,box-shadow] duration-200 ${
  error ?
  'border-danger ring-4 ring-danger/10' :
  focused ?
  'border-brand ring-4 ring-brand/10' :
  'border-line hover:border-[#C9D3E3]'}`;


  const common = {
    id,
    name: field.name,
    value,
    required: field.required,
    'aria-invalid': !!error,
    'aria-describedby': error ? errId : undefined,
    onFocus: () => setFocused(true),
    onBlur: () => {
      setFocused(false);
      onBlur(field.name);
    }
  };

  return (
    <div className={field.half ? 'sm:col-span-1' : 'sm:col-span-2'}>
      <div className="relative">
        {type === 'textarea' ?
        <textarea
          {...common}
          rows={4}
          placeholder={focused ? field.placeholder : ''}
          onChange={(e) => onChange(field.name, e.target.value)}
          className={`${shell} resize-none px-4 pb-3 pt-8 placeholder:text-muted/70`} /> :

        type === 'select' ?
        <>
            <select
            {...common}
            onChange={(e) => onChange(field.name, e.target.value)}
            className={`${shell} h-[60px] appearance-none px-4 pr-10 pt-5 ${value ? 'text-ink' : 'text-transparent'}`}>
            
              <option value="" disabled hidden />
              {field.options?.map((o) =>
            <option key={o} value={o} className="text-ink">
                  {o}
                </option>
            )}
            </select>
            <ChevronDownIcon aria-hidden className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          </> :

        <input
          {...common}
          type={type}
          autoComplete={field.autoComplete}
          inputMode={type === 'tel' ? 'tel' : type === 'email' ? 'email' : type === 'url' ? 'url' : undefined}
          placeholder={focused ? field.placeholder : ''}
          onChange={(e) => onChange(field.name, e.target.value)}
          className={`${shell} h-[60px] px-4 pt-5 placeholder:text-muted/70`} />

        }
        <label
          htmlFor={id}
          className={`pointer-events-none absolute left-4 top-[19px] origin-left whitespace-nowrap text-[15px] transition-[transform,color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          floated ? '-translate-y-[11px] scale-[0.78]' : ''} ${
          error ? 'text-danger' : focused ? 'text-brand' : 'text-muted'}`}>
          
          {field.label}
          {field.required && <span className="ml-0.5 text-brand">*</span>}
        </label>
      </div>
      <AnimatePresence initial={false}>
        {error &&
        <motion.p
          id={errId}
          role="alert"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2, ease: EASE }}
          className="flex items-center gap-1.5 overflow-hidden pt-1.5 text-[13px] font-medium text-danger">
          
            <AlertCircleIcon aria-hidden className="h-3.5 w-3.5 shrink-0" />
            {error}
          </motion.p>
        }
      </AnimatePresence>
    </div>);

}