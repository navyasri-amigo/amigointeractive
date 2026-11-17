import React, { useState } from 'react';
import { FieldConfig, FormErrors, FormStatus, FormValues } from '../types/forms';
import { validateField } from '../utils/validation';

export function useInquiryForm(fields: FieldConfig[], formId: string) {
  const initial: FormValues = Object.fromEntries(fields.map((f) => [f.name, '']));
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [attempted, setAttempted] = useState(false);

  const findField = (name: string) => fields.find((f) => f.name === name);

  const setValue = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    const field = findField(name);
    if (field && (touched[name] || attempted)) {
      setErrors((prev) => ({ ...prev, [name]: validateField(field, value) }));
    }
  };

  const blur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const field = findField(name);
    if (field) setErrors((prev) => ({ ...prev, [name]: validateField(field, values[name] ?? '') }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAttempted(true);
    const next: FormErrors = {};
    fields.forEach((f) => {
      next[f.name] = validateField(f, values[f.name] ?? '');
    });
    setErrors(next);
    const firstInvalid = fields.find((f) => next[f.name]);
    if (firstInvalid) {
      document.getElementById(`${formId}-${firstInvalid.name}`)?.focus();
      return;
    }
    setStatus('submitting');
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus('success');
  };

  const hasErrors = attempted && Object.values(errors).some(Boolean);

  return { values, errors, status, hasErrors, setValue, blur, submit };
}