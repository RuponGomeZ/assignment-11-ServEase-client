import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EditService = () => {
    // const id = useParams()
    const { _id, area, description, img, price, service } = useLoaderData()
    const navigate = useNavigate()
    const handleEdit = (e) => {
        e.preventDefault()

        const form = e.target
        const img = form.imageUrl.value
        const service = form.name.value
        const price = form.price.value
        const area = form.area.value
        const description = form.description.value
        console.log(img, service, price, area);
        const serviceUpdateData = { img, service, price, area, description };



        axios.patch(`http://localhost:5000/editService/${_id}`, serviceUpdateData, { withCredentials: true })
            .then(res => {
                toast.success('Updated Successfully')
                navigate('/manageService')
                console.log(res.data);
            })
            .catch(error => {
                toast.error(error)
            })
    }
    // console.log(id);
    return (
        <div>
            <div className="card bg-base-100 mx-auto mt-14 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body p5">
                    <h2 className='font-bold text-2xl text-center'>Update {service}</h2>
                    <form onSubmit={handleEdit} className="fieldset">

                        {/* Image Url */}
                        <label className="label">Image Url</label>
                        <input defaultValue={img} name='imageUrl' type="url" className="input" placeholder="Image url here" />

                        {/* Service Name */}
                        <label className="label">Service Name</label>
                        <input defaultValue={service} name='name' type="text" className="input" placeholder="Service Name" />

                        {/* Price */}
                        <label className="label">Price</label>
                        <input defaultValue={price} name='price' type="number" className="input" placeholder="Enter Your desired price" />

                        {/* Service Area */}
                        <label className="label">Service Area</label>
                        <input defaultValue={area} name='area' type="text" className="input" placeholder="Service Area" />

                        {/* Description */}
                        <label className="label">Description</label>
                        <input defaultValue={description} name='description' type="text" className="input" placeholder="Service Area" />


                        <button className="btn btn-neutral mt-4">Update your service</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditService;