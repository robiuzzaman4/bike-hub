"use client";

import { toast } from "react-hot-toast";

const SubscribeForm = () => {

    const hangleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const email = form.email.value;
        if (email) {
            form.reset();
            return toast.success("Thanks for your subscription!", {
                iconTheme: {
                    primary: '#4A3AFF',
                    secondary: '#FFFFFF',
                },
            });
        } else {
            return toast.error("Please provide your email!");
        }
    }

    return (
        <form
            onSubmit={hangleSubmit}
            className="w-full relative">
            <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="w-full px-4 py-2 rounded-xl bg-bh-neutrals-100 shadow-grid border border-bh-neutrals-200/30 focus:border-bh-primary focus:outline-none" />
            <button className="absolute right-0 top-0 bottom-0 px-3 rounded-xl bg-bh-primary shadow-grid text-bh-neutrals-100 transition">
                <i className="ri-send-plane-fill text-xl"></i>
            </button>
        </form>
    );
};

export default SubscribeForm;