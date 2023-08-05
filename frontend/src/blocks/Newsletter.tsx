import SubscribeForm from "@/components/SubscribeForm";

const Newsletter = () => {
    return (
        <section className="bg-bh-secondary" id="newsletter">
            <div className="bh-container py-20 relative flex flex-col gap-8 w-full">
                {/* title */}
                <div className="flex flex-col items-center mb-4">
                    <h2 className="bh-text-h2 text-center">
                        Newsletter Subscription
                    </h2>
                    <p className="bh-text-small text-center">
                        To stay up to date with bikes, subscribe our newsletter.
                    </p>
                </div>

                <div className="w-full sm:max-w-[480px] mx-auto px-4 grid place-items-center gap-8">

                    {/* icon */}
                    <div className="w-16 h-16 bg-bh-neutrals-100 border border-bh-neutrals-200/30 shadow-grid rounded-full grid place-items-center">
                        <i className="ri-mail-unread-fill text-3xl text-bh-primary"></i>
                    </div>

                    {/* form */}
                    <SubscribeForm />
                    <p className="text-xs text-bh-neutrals-500 text-left -mt-8">
                        No concerns, only one email monthly.
                    </p>
                </div>

                {/* gradient */}
                <div className="bh-gradient w-40 md:w-48 h-40 md:h-48 rounded-full blur-[8rem] opacity-70 absolute left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 top-4" />
            </div>
        </section>
    );
};

export default Newsletter;