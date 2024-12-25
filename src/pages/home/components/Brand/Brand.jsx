import PropTypes from 'prop-types';

function Brand({ id }) {
    const brands = [
        { src: '/src/assets/brands/R_creative.webp' },
        { src: '/src/assets/brands/O_creative.webp' },
        { src: '/src/assets/brands/innovate.webp' },
        { src: '/src/assets/brands/express.webp' },
        { src: '/src/assets/brands/ZA_brandname.webp' },
        { src: '/src/assets/brands/name_tagline_space.webp' },
    ];

    return (
        <section id={id} className="py-36">
            <div className="container mx-auto text-center mt-20 max-w-7xl">
                <h2 className="text-center mb-16 text-md font-bold uppercase">
                    We worked with global largest brands
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-center px-20">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center w-20 h-20"
                        >
                            <img
                                src={brand.src}
                                alt="Brand Logo"
                                className="w-full h-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

Brand.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Brand; 