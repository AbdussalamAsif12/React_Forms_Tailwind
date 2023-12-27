import React from 'react';

const Form = () => {
    return (
        <div className='max-w-96 mx-auto mt-20 p-6 bg-gray-100 rounded-md shadow-md'>
            <div className='text-center text-2xl font-bold pb-5'>Login In</div>

            <div className='space-y-6'>
                <div>
                    <input type='text' name='' id='' placeholder='Username' className='w-full p-2 border rounded outline-none' />
                </div>
                <div>
                    <input type='password' name='' id='' placeholder='Password' className='w-full p-2 border rounded outline-none' />
                </div>
            </div>
            <div className='text-center mt-2'>
                Lost Password? <span className='text-blue-500 cursor-pointer'>Click here</span>
            </div>
            <div className='flex justify-center mt-4'>
                <div className='cursor-pointer text-white bg-blue-500 px-2 py-2 rounded'>Login</div>
            </div>
        </div>
    );
};

export default Form;
