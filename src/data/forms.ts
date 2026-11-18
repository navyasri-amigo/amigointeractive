import { FieldConfig } from '../types/forms';

const budgets = ['Under $5,000', '$5,000 – $25,000', '$25,000 – $100,000', '$100,000+', 'Prefer to discuss'];

export const advertiserFields: FieldConfig[] = [
{ name: 'fullName', label: 'Full Name', required: true, placeholder: 'Jane Doe', autoComplete: 'name', half: true },
{ name: 'company', label: 'Company Name', required: true, placeholder: 'Acme Inc.', autoComplete: 'organization', half: true },
{ name: 'email', label: 'Business Email', type: 'email', required: true, placeholder: 'jane@company.com', autoComplete: 'email', half: true },
{ name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 555 000 0000', autoComplete: 'tel', half: true },
{ name: 'website', label: 'Website', type: 'url', placeholder: 'company.com', autoComplete: 'url', half: true },
{
  name: 'industry',
  label: 'Industry',
  type: 'select',
  required: true,
  half: true,
  options: ['E-commerce & Retail', 'iGaming & Entertainment', 'Mobile Apps & Games', 'Finance', 'Travel & Hospitality', 'Health & Wellness', 'Education', 'Other']
},
{
  name: 'campaignType',
  label: 'Campaign Type',
  type: 'select',
  required: true,
  half: true,
  options: [ 'Online Advertising', 'Mobile App Promotion', 'SEO & Content', 'Brand Campaign', 'Not sure yet']
},
{ name: 'budget', label: 'Monthly Advertising Budget', type: 'select', required: true, half: true, options: budgets },
{ name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us about your goals, audiences and timelines' }];


export const publisherFields: FieldConfig[] = [
{ name: 'fullName', label: 'Full Name', required: true, placeholder: 'Jane Doe', autoComplete: 'name', half: true },
{ name: 'company', label: 'Company / Website', required: true, placeholder: 'Your brand or site name', autoComplete: 'organization', half: true },
{ name: 'email', label: 'Business Email', type: 'email', required: true, placeholder: 'jane@company.com', autoComplete: 'email', half: true },
{ name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 555 000 0000', autoComplete: 'tel', half: true },
{ name: 'propertyUrl', label: 'Website / App URL', type: 'url', required: true, placeholder: 'yoursite.com', half: true },
{
  name: 'audienceType',
  label: 'Audience Type',
  type: 'select',
  required: true,
  half: true,
  options: ['Website', 'Mobile App', 'Social / Creator', 'Email / Newsletter', 'Other']
},
{
  name: 'traffic',
  label: 'Monthly Traffic / Audience Size',
  type: 'select',
  required: true,
  half: true,
  options: ['Under 10K', '10K – 100K', '100K – 1M', '1M+', 'Prefer not to say']
},
{
  name: 'market',
  label: 'Primary Market',
  type: 'select',
  required: true,
  half: true,
  options: ['Americas', 'Europe', 'Asia Pacific', 'Middle East & Africa', 'Global']
},
{ name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us about your audience and content' }];


export const contactFields: FieldConfig[] = [
{ name: 'name', label: 'Name', required: true, placeholder: 'Jane Doe', autoComplete: 'name', half: true },
{ name: 'company', label: 'Company', placeholder: 'Acme Inc.', autoComplete: 'organization', half: true },
{ name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'jane@company.com', autoComplete: 'email', half: true },
{
  name: 'projectType',
  label: 'Project Type',
  type: 'select',
  required: true,
  half: true,
  options: ['Online Advertising', 'SEO Optimization', 'Brand Strategy', 'Digital Strategy Planning', 'Video Content Creation', 'Content Marketing', 'iGaming', 'Partnership', 'Other']
},
{ name: 'budget', label: 'Budget', type: 'select', options: budgets },
{ name: 'message', label: 'Message', type: 'textarea', required: true, placeholder: 'What would you like to create together?' }];