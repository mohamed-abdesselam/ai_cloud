import Navbar from '@/components/home/navigation/navbar';
import Footer from '@/components/home/navigation/footer';
import React from 'react'

interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center w-full">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
};

export default MarketingLayout
