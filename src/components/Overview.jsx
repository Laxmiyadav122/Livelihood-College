import principalImg from "../assets/principal.png";

function Overview() {
    return (
        <div className="bg-gray-100 py-12 " style={{fontFamily:"georgia, serif"}}>
            <h1 className="text-4xl font-bold mb-10 text-center text-blue-900 tracking-wide">
                Overview
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 px-6 lg:px-20 items-stretch">
                <div className="lg:col-span-4 flex flex-col items-center bg-white p-6 rounded-xl shadow-lg border border-gray-200 h-full">
                    <img
                        src={principalImg}
                        alt="Vision and Achievement - Livelihood College"
                        className="w-full h-80 object-contain rounded-xl shadow-md border border-gray-300 mb-4"
                    />

                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-gray-800">Amarnath Dhamgaya</h3>
                        <h4 className="text-gray-600 mt-1">Principal, DPLC Jashpur</h4>
                        <p className="text-blue-600 hover:underline mt-1">Amarnath@gmail.com</p>
                    </div>
                </div>

                <div className="lg:col-span-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200 h-full flex flex-col justify-center">
                    <p className="text-gray-700 leading-relaxed text-justify">
                        Livelihood College is committed to empowering youth through skill-based education and
                        hands-on training. Our vision is to bridge the gap between education and employment,
                        ensuring that every student gains practical expertise and becomes job-ready.
                        <br /><br />
                        We aim to nurture confident, skilled, and self-reliant professionals who can contribute
                        meaningfully to society and the economy. By fostering innovation, entrepreneurship, and
                        inclusivity, Livelihood College strives to create opportunities for youth from all
                        backgrounds to achieve sustainable livelihoods.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Overview;
