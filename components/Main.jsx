import React from 'react'

const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    {/* Personal Introduction */}
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        Full-stack Web Developer
                    </p>
                    <h1 className='py-4 text-gray-700'>
                        Hello! I'm <span className='text-[#5651e5]'>Jose Mercado</span>
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        I'm a Full-stack Web Developer currently specializing in framworks such as React, Redux, Node.js and Next.js learning mobile development with react native hoping to put my skills to the test and contribute to the future of tech!
                    </p>
                    {/* Icon Container */}
                    <div className=''>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main