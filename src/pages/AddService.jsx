import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import AuthContext from '../Authontication/Authcontext';

const AddService = () => {

    const { user } = useContext(AuthContext)

    const queryClient = useQueryClient()

    const { mutateAsync } = useMutation({
        mutationFn: async serviceData => {
            await axios.post('http://localhost:5000/addService', serviceData)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['services'] })
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const serviceProviderEmail = user.email
        const serviceProviderImg = user.photoURL
        const serviceProviderName = user.displayName

        const form = e.target
        const img = form.imageUrl.value
        const service = form.name.value
        const price = form.price.value
        const area = form.area.value
        const description = form.description.value
        console.log(img, service, price, area);
        const serviceData = { img, service, price, area, description, serviceProviderEmail, serviceProviderImg, serviceProviderName };

        // axios.post('http://localhost:5000/addService', serviceData)
        //     .then(res => console.log(res))

        try {
            await mutateAsync(serviceData)
            form.reset()
            toast.success('Service Added successfully!')
        }
        catch (err) {
            toast.err(err.message)
        }

    }

    return (
        <div>
            <div className="card bg-base-100 mx-auto p-10 mt-14 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body"></div>
                <form onSubmit={handleSubmit} className="fieldset">

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
                    <label className="label">Description</label>
                    <input name='description' type="text" className="input" placeholder="Service Area" />


                    <button className="btn btn-neutral mt-4">Add your service</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;