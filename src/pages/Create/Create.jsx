

const Create = () => {



    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const fname = form.fname.value;
        const lname = form.lname.value;
        const email = form.email.value;
        const country = form.country.value;
        const address = form.address.value;
        const company = form.city.value;
        const age = form.region.value;
        const phone = form.code.value;



        const product = { fname, lname, email, country, company, address, age, phone }
        console.log(product);

        // send data to the server

        fetch('http://localhost:5000/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }






    return (
        <div>

            <form onSubmit={handleAddProduct}>

                <div className="space-y-12 bg-gray-50 p-10 ml-[52px] mt-[73px] mr-[85px]">

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                <div className="mt-2">
                                    <input required type="text" name="fname" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 /sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            {/*  */}

                            <div className="sm:col-span-3">
                                <label for="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                <div className="mt-2">
                                    <input required type="text" name="lname" id="last-name" autocomplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 /sm:text-sm sm:leading-6" />
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



                            <div className="sm:col-span-3">
                                <label for="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                                <div className="mt-2">
                                    <select id="country" name="country" autocomplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 /sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>

                            {/*  */}

                            <div className="col-span-3">
                                <label for="street-address" className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                                <div className="mt-2">
                                    <input required type="text" name="address" id="street-address" autocomplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            {/*  */}

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label for="city" className="block text-sm font-medium leading-6 text-gray-900">Company</label>
                                <div className="mt-2">
                                    <input required type="text" name="city" id="city" autocomplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            {/*  */}

                            <div className="sm:col-span-2">
                                <label for="region" className="block text-sm font-medium leading-6 text-gray-900">Age</label>
                                <div className="mt-2">
                                    <input required type="number" name="region" id="region" autocomplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            {/*  */}


                            <div className="sm:col-span-2">
                                <label for="postal-code" className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                                <div className="mt-2">
                                    <input required type="tel" name="code" id="postal-code" autocomplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                                </div>
                            </div>
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

export default Create;