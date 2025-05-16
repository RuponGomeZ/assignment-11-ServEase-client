
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import AuthContext from '../Authontication/Authcontext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const BookService = () => {
    const { _id, area, description, img, price, service, serviceProviderEmail, serviceProviderImg, serviceProviderName } = useLoaderData()

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
            <div className="card bg-base-100 mx-auto mt-14 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body"></div>
                <form onSubmit={handleSubmit} className="fieldset">
                    {/* Service Id*/}
                    <label className="label">Service ID</label>
                    <input value={_id} name='serviceId' type="text" className="input" />

                    {/* Service Name */}
                    <label className="label">Service Name</label>
                    <input value={service} name='name' type="text" className="input" placeholder="Service Name" />


                    {/* Image Url */}
                    <label className="label">Image Url</label>
                    <input value={img} name='imageUrl' type="url" className="input" placeholder="Image url here" />

                    {/* Service Provider Email */}
                    <label className="label">Service Provider Email</label>
                    <input value={serviceProviderEmail} name='providerEmail' type="text" className="input" placeholder="providerName" />


                    {/* Service Provider Name */}
                    <label className="label">Service Provider Name</label>
                    <input value={serviceProviderName} name='providerName' type="text" className="input" placeholder="providerName" />


                    {/* Current User Email */}
                    <label className="label">Your Email</label>
                    <input value={user?.email} name='providerEmail' type="text" className="input" placeholder="providerName" />

                    {/* Price */}
                    <label className="label">Price</label>
                    <input value={price} name='price' type="number" className="input" placeholder="Enter Your desired price" />

                    {/* Service Area */}
                    <label className="label">Service Area</label>
                    <input value={area} name='area' type="text" className="input" placeholder="Service Area" />

                    {/* Description */}
                    <label className="label">Description</label>
                    <input value={description} name='description' type="text" className="input" placeholder="Service Area" />


                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Book service</button>
                </form>
            </div>
        </div>
    );
};

export default BookService;