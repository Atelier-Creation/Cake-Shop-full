import React from "react";

export default function ContactMapSection() {
    return (
        <section className="w-full pb-10">
            <div className="mx-auto lg:px-20 px-5">

                {/* Map */}
                <div className="w-full lg:h-[90vh] md:h-[60vh] h-[40vh] rounded-3xl overflow-hidden shadow-xl">
                    <iframe
                        title="Google Map Location"
                        src="https://www.google.com/maps?q=Coimbatore,Tamil%20Nadu&output=embed"
                        className="w-full h-full border-0"
                        loading="lazy"
                    ></iframe>
                </div>

            </div>
        </section>
    );
}