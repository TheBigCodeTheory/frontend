import { PageTitle } from '@/components/PageTitle';
import { RegisterForm } from '@/components/forms/register-form/RegisterForm';

export default function HomePage() {
  return (
    <div className='bg-black'>
      <PageTitle>Home Page</PageTitle>
      <RegisterForm />
    </div>
  )
}
