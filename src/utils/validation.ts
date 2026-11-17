import { FieldConfig } from '../types/forms';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const URL_LIKE = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i;

export function validateField(field: FieldConfig, raw: string): string | undefined {
  const value = raw.trim();
  if (field.required && !value) {
    return field.type === 'select' ? `Please select ${field.label.toLowerCase()}` : `${field.label} is required`;
  }
  if (!value) return undefined;
  if (field.type === 'email' && !EMAIL.test(value)) return 'Enter a valid email address';
  if (field.type === 'url' && !URL_LIKE.test(value)) return 'Enter a valid URL, e.g. yoursite.com';
  if (field.type === 'tel' && value.replace(/\D/g, '').length < 7) return 'Enter a valid phone number';
  if (field.type === 'textarea' && field.required && value.length < 10) return 'Please add a little more detail';
  return undefined;
}