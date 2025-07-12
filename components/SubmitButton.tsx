import React from 'react'
import { Button } from './ui/button';
import Image from 'next/image';



interface SubmitButtonProps {
    isLoading: boolean;
    className?: string;
    children: React.ReactNode;
    }

const SubmitButton = ({isLoading, className, children}: SubmitButtonProps  ) => {
  return (
    <Button type='submit' className={className ?? "shad-primary-btn w-full"} disabled={isLoading}>
        {isLoading ? (
            <div className='flex items-center gap-4'>
                        <Image
                        src= "/assets/icons/loading.svg"
                        alt="Loading"
                        width={24}
                        height={24}
                        className="animate-spin"
                        />

                        Loading...
            </div>
        ): children}


        
    </Button>
  )
}

export default SubmitButton