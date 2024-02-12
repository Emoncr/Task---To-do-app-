import React from 'react'
import AppLayout from '../components/AppLayout'

const Home = () => {

    return (
        <main className=''>
            <section className='custom_bg bg-cover bg-no-repeat bg-center dark:bg-gray-700 h-full  min-h-screen p-3 py-5 sm:p-5 sm:py-5 lg:py-8'>
                <div className="p-4 sm:p-6 border-gray-200 bg-[#eee] rounded-lg max-w-6xl mx-auto">
                    <div>
                        <h1 className='text-xl font-bold'>Welcome to your app</h1>
                    </div>

                    <div className='mt-6 md:mt-10'>
                        <AppLayout />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home