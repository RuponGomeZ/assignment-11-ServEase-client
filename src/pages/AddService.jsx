import React from 'react';

const AddService = () => {



    return (
        <div>
            <div className="card bg-base-100 mx-auto mt-14 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body"></div>
                <form className="fieldset">

                    {/* Image Url */}
                    <label className="label">Image Url</label>
                    <input name='imageUrl' type="url" className="input" placeholder="Image url here" />

                    {/* Service Name */}
                    <label className="label">Service Name</label>
                    <input name='name' type="text" className="input" placeholder="Service Name" />

                    {/* Price */}
                    <label className="label">Price</label>
                    <input name='price' type="number" className="input" placeholder="Enter Your desired price" />

                    {/* Service Area */}
                    <label className="label">Service Area</label>
                    <input name='area' type="text" className="input" placeholder="Service Area" />

                    {/* Description */}
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Add your service</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;