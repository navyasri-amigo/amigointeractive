import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircleIcon, Loader2Icon } from 'lucide-react';
import { FieldConfig } from '../../types/forms';
import { useInquiryForm } from '../../hooks/useInquiryForm';
import { FormField } from './FormField';
import { SuccessState } from './SuccessState';
import { ArrowButton } from '../ui/ArrowButton';

type InquiryFormProps = {
  formId: string;
  fields: FieldConfig[];
  submitLabel: string;
  successText: string;
};

export function InquiryForm({ formId, fields, submitLabel, successText }: InquiryFormProps) {
  const form = useInquiryForm(fields, formId);
  const submitting = form.status === 'submitting';

  return (
    <AnimatePresence mode="wait" initial={false}>
      {form.status === 'success' ?
      <SuccessState key="success" text={successText} /> :

      <motion.form
        key="form"
        noValidate
        onSubmit={form.submit}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
        aria-label={submitLabel}>
        
          <AnimatePresence initial={false}>
            {form.hasErrors &&
          <motion.div
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden">
            
                <p className="mb-5 flex items-center gap-2 rounded-xl bg-danger/5 px-4 py-3 text-sm font-medium text-danger">
                  <AlertCircleIcon aria-hidden className="h-4 w-4 shrink-0" />
                  Please complete the highlighted fields.
                </p>
              </motion.div>
          }
          </AnimatePresence>
          <div className="grid gap-4 sm:grid-cols-2">
            {fields.map((f) =>
          <FormField
            key={f.name}
            field={f}
            formId={formId}
            value={form.values[f.name] ?? ''}
            error={form.errors[f.name]}
            onChange={form.setValue}
            onBlur={form.blur} />

          )}
          </div>
          <div className="mt-8 flex flex-col-reverse gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xs text-[13px] leading-relaxed text-muted">
              Fields marked <span className="text-brand">*</span> are required. We only use your details to respond to your inquiry.
            </p>
            <ArrowButton type="submit" size="lg" disabled={submitting} icon={!submitting} className="w-full sm:w-auto">
              {submitting ?
            <span className="inline-flex items-center gap-2">
                  <Loader2Icon aria-hidden className="h-4 w-4 animate-spin" /> Sending…
                </span> :

            submitLabel
            }
            </ArrowButton>
          </div>
        </motion.form>
      }
    </AnimatePresence>);

}