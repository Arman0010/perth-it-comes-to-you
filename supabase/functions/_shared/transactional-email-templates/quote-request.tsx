import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  email?: string
  phone?: string
  address?: string
  description?: string
}

const Email = ({
  name = '',
  email = '',
  phone = '',
  address = '',
  description = '',
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New quote request from {name || 'a customer'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Quote Request</Heading>
        <Text style={intro}>
          You've received a new quote request from your Arman IT website.
        </Text>
        <Hr style={hr} />
        <Section>
          <Text style={label}>Full Name</Text>
          <Text style={value}>{name}</Text>

          <Text style={label}>Email</Text>
          <Text style={value}>{email}</Text>

          <Text style={label}>Mobile Number</Text>
          <Text style={value}>{phone}</Text>

          <Text style={label}>Address</Text>
          <Text style={value}>{address}</Text>

          <Text style={label}>Service Description</Text>
          <Text style={value}>{description}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Props) => `New Quote Request from ${data?.name ?? 'website'}`,
  displayName: 'Quote Request',
  to: 'arman@armanitsolutions.com',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '0400 000 000',
    address: '123 Main St, Perth WA',
    description: 'WiFi is very slow in the back rooms of the house.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '560px' }
const h1 = { color: '#0b5fff', fontSize: '22px', margin: '0 0 12px' }
const intro = { color: '#333', fontSize: '14px', margin: '0 0 12px' }
const hr = { borderColor: '#e5e7eb', margin: '16px 0' }
const label = {
  color: '#6b7280',
  fontSize: '12px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.04em',
  margin: '12px 0 2px',
}
const value = { color: '#111827', fontSize: '15px', margin: '0 0 8px', whiteSpace: 'pre-wrap' as const }
