import React from 'react';

const Map = () => {
    return (
        <div className="w-full h-screen mx-auto my-auto">
            <h1 className="text-center">Find Nearby Hospital</h1>
            <iframe
                className="w-full h-full"
                style={{ border: '0' }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24368.55699428194!2d-0.1410892292136041!3d51.501527822709036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce43e92c31%3A0x3e6b8d170ebf9986!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1645263733969!5m2!1sen!2suk"
                title="Google Map"
            ></iframe>
        </div>
    );
};

export default Map;
