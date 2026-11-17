export type FieldType = 'text' | 'email' | 'tel' | 'url' | 'select' | 'textarea';

export interface FieldConfig {
  name: string;
  label: string;
  type?: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  autoComplete?: string;
  half?: boolean;
}

export type FormValues = Record<string, string>;
export type FormErrors = Record<string, string | undefined>;
export type FormStatus = 'idle' | 'submitting' | 'success';