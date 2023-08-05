"use client";

import { Disclosure, Transition } from "@headlessui/react";

const Faq = () => {
    const faqData = [
        {
            id: 1,
            qustion: "Are the bikes showcased on your website available for sale?",
            answer: "While we don't directly sell bikes on our platform, we provide a platform for bike enthusiasts and sellers to showcase their unique creations. If you're interested in purchasing a showcased bike, you can reach out to the bike owner or manufacturer directly through the contact information provided."
        },
        {
            id: 2,
            qustion: "Can I share my biking adventure stories on your website?",
            answer: "Absolutely! We encourage you to share your biking adventure stories with us. You can contribute by submitting your story, complete with captivating photos. Let's inspire the biking community together!"
        },
        {
            id: 3,
            qustion: "How do I stay updated on new additions to your bike collection?",
            answer: "To stay in the loop about our latest bike showcases, you can subscribe to our newsletter. We send out regular updates about new additions, upcoming events, and exclusive behind-the-scenes content. You can find the subscription form in the footer of our website."
        },
        {
            id: 4,
            qustion: "Can I request a specific type of bike to be showcased?",
            answer: "We're always eager to hear your suggestions and preferences. If you have a specific type of bike you'd like to see showcased on our website, feel free to reach out to us through our 'Contact Us' page. While we can't guarantee every request, we'll do our best to consider and accommodate your suggestions."
        }
    ];

    return (
        <section className="bh-container py-20 grid gap-8" id="faq">
            {/* title */}
            <div className="flex flex-col items-center mb-4">
                <h2 className="bh-text-h2 text-center">
                    Frequently asked questions
                </h2>
                <p className="bh-text-small text-center">
                    Explore FAQs for in-depth information.
                </p>
            </div>

            <div className="grid gap-4">
                {
                    faqData.map((faq, index) => (
                        <Disclosure as="div" key={faq.id} defaultOpen={index === 0 ? true : false}>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="w-full flex items-center justify-between rounded-xl bg-bh-secondary px-4 py-2 text-left hover:bg-bh-neutrals-100 hover:shadow-grid focus:outline-none transition bh-text-default">
                                        <p>{faq.qustion}</p>
                                        <i className={`ri-arrow-down-s-line text-2xl ${open ? "rotate-180 transform" : ""}`}></i>
                                    </Disclosure.Button>
                                    <Transition
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-75 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0">
                                        <Disclosure.Panel className="px-4 pt-4 bh-text-small">
                                            {faq.answer}
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                    ))
                }
            </div>
        </section>
    );
};

export default Faq;