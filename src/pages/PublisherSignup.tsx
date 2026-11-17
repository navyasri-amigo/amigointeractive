import React from 'react';
import { SignupLayout } from '../components/signup/SignupLayout';
import { InquiryForm } from '../components/forms/InquiryForm';
import { publisherFields } from '../data/forms';
import { publisherBenefits } from '../data/home';

export function PublisherSignup() {
  return (
    <SignupLayout
      tone="violet"
      label="Publisher signup"
      titleLines={['Turn your', 'audience into', <span key="o" className="text-violet">opportunity.</span>]}
      supporting="Partner with Amigo Interactive and explore new opportunities to grow and monetize your audience."
      flow={['Audience', 'Content', 'Traffic', 'Opportunity', 'Growth']}
      benefitsTitle="Why publishers partner with Amigo"
      benefits={publisherBenefits}
      formTitle="Become a publisher"
      formIntro="Share a few details about your audience and property."
      form={
      <InquiryForm
        formId="publisher"
        fields={publisherFields}
        submitLabel="Become a Publisher"
        successText="Your application has been received. Our team will review your details and get back to you." />

      } />);


}