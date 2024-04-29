import React from 'react';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Validate = () => {

    return (
        <div>
            <SectionTitle subheading={"Check Validation"} heading={"Table"}></SectionTitle>

            <form >

                <div className="space-y-12 bg-gray-50 p-10 ml-[52px] mt-[73px] mr-[85px]">

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Validation Form </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Validate your Information</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-6">
                                <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                <div className="mt-2">
                                    <input required type="text" name="fname" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 /sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            {/*  */}

                            <div className="sm:col-span-6">
                                <label for="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                <div className="mt-2">
                                    <input required type="text" name="lname" id="last-name" autocomplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 /sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label for="last-name" className="block text-sm font-medium leading-6 text-gray-900">User Name</label>
                                <div className="mt-2 join w-full">
                                <button className="btn join-item ">@Username</button>
                                    <input required type="text" name="lname" id="last-name" autocomplete="family-name" className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 /sm:text-sm sm:leading-6" />

                                    
                                </div>
                            </div>
                            {/*  */}
                            <div className="sm:col-span-6">
                                <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input required id="email" name="email" type="email" autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 /sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            {/*  */}



                            
                        </div>
                    </div>

                </div>

                <div className="mt-6 flex items-center justify-center gap-x-6 px-9 pb-8">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </form>

        </div>
    );
};

export default Validate;