import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import FollowUpForm from '@/components/FollowUpForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Register Your Ministry | MII Australia',
  description: 'Register your ministry and join the Follow Up Centre — Australia’s online follow-up hub connecting seekers to real Christian community.',
}

export default function RegisterPage() {
  return (
    <>
      <Nav showCta={false} />
      <FollowUpForm />
      <Footer />
    </>
  )
}
