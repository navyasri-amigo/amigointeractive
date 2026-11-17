import React from 'react';
import { SignupLayout } from '../components/signup/SignupLayout';
import { InquiryForm } from '../components/forms/InquiryForm';
import { advertiserFields } from '../data/forms';
import { advertiserBenefits } from '../data/home';

export function AdvertiserSignup() {
  return (
    <SignupLayout
      tone="brand"
      label="Advertiser signup"
      titleLines={['Grow your', <span key="r" className="text-brand">reach.</span>]}
      supporting="Connect with the right audiences through targeted digital advertising and performance-focused strategies."
      flow={['Audience', 'Targeting', 'Advertising', 'Engagement', 'Conversion']}
      benefitsTitle="Why partner with Amigo?"
      benefits={advertiserBenefits}
      formTitle="Start as an advertiser"
      formIntro="Tell us about your business and goals. It takes about two minutes."
      form={
      <InquiryForm
        formId="advertiser"
        fields={advertiserFields}
        submitLabel="Start as an Advertiser"
        successText="Your inquiry has been received. Our team will review your requirements and get back to you." />

      } />);


}