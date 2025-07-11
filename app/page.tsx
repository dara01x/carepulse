
import PatientForm from '@/components/forms/PatientForm';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {

  return (
   <div className="flex h-screen max-h-screen">
    <section className="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[496px]">
        
        <Image
          src="/assets/icons/logo-full.svg"
          alt="Landing Page"
          width={1000}
          height={1000}
          className="mb-12 h-10 w-fit"
        />

          <PatientForm />

          <div className="text-14-refular mt-20 flex justify-between ">
            <p className='justify-items-end text-dark-600 xl:text-left'>© 2025 Zeronex. All rights reserved.</p>
            <Link href="/?admin=true" className='text-green-500'>
            admin
            </Link>
          </div>
          
        </div>
    </section>

    <Image
      src="/assets/images/onboarding-img.png"
      alt="Patient"
      width={1000}
      height={1000} 
      className="side-img max-w-[50%]"
    />
   </div>
  );
}
