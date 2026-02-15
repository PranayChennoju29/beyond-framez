import {
    Lightbulb,
    Sparkles,
    ShieldCheck,
    Users,
    Star,
    Globe,
    Award, GraduationCap,
    Monitor,
    Box,
    Zap,
    Cpu,
    Palette,
    Film,
    Workflow,
    PenTool,
    Smartphone,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter
} from "lucide-react";
import Image from "next/image";



export default function AboutPage() {
    return (
        <main className="bg-black text-white">

            {/* ================= HERO SECTION ================= */}
            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[75vh] flex items-center justify-center text-center px-6 overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/about-hero.png')" }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70" />

                {/* Content */}
                <div className="relative z-10 max-w-4xl">

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Beyond the Frame:
                        <br />
                        <span className="text-purple-500">
                            Crafting Stories That Move the World
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-300 text-lg">
                        Beyond Framez is a creative studio driven by vision and precision —
                        blending VFX, motion design, and digital storytelling to create
                        immersive brand experiences.
                    </p>

                    <div className="mt-8 flex justify-center gap-4 flex-wrap">
                        <a
                            href="/services"
                            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-md"
                        >
                            Our Services
                        </a>

                        {/* <a
                            href="/portfolio"
                            className="px-6 py-3 border border-purple-500 hover:bg-purple-500/20 transition rounded-md"
                        >
                            View Portfolio
                        </a> */}
                    </div>

                </div>
            </section>


            {/* OUR VISION & VALUES */}
            <section className="bg-black text-white py-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Our Vision & Values
                        </h2>

                        <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            At Beyond Framez, we transform imagination into reality. Our mission
                            is to push the boundaries of visual storytelling through cutting-edge
                            VFX and motion graphics, delivering unparalleled creative solutions
                            that captivate audiences and elevate brands globally.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {[
                            {
                                title: "Innovation",
                                desc: "Constantly exploring new technologies and creative techniques to deliver groundbreaking visual experiences.",
                                icon: Lightbulb,
                            },
                            {
                                title: "Creativity",
                                desc: "Cultivating a passion for imaginative design and artistic expression in every project we undertake.",
                                icon: Sparkles,
                            },
                            {
                                title: "Excellence",
                                desc: "Committed to the highest standards of quality and precision in all our VFX and motion graphic productions.",
                                icon: ShieldCheck,
                            },
                            {
                                title: "Collaboration",
                                desc: "Fostering strong partnerships with clients and within our team to achieve shared visionary goals.",
                                icon: Users,
                            },
                            {
                                title: "Integrity",
                                desc: "Operating with transparency, honesty, and ethical practices in all business interactions.",
                                icon: Star,
                            },
                            {
                                title: "Impact",
                                desc: "Creating memorable and meaningful visual content that leaves a lasting impression on audiences.",
                                icon: Globe,
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="bg-[#111111] border border-white/10 rounded-xl p-8 text-center hover:border-purple-500/40 transition duration-300"
                                >
                                    {/* Icon */}
                                    <div className="mb-6 flex justify-center">
                                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-600/10 border border-purple-500/20">
                                            <Icon className="w-6 h-6 text-purple-500" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-4">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}

                    </div>

                </div>
            </section>


            {/* MEET THE VISIONARIES */}
            <section className="bg-black text-white py-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        Meet the Visionaries
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT IMAGE */}
                        <div className="rounded-2xl overflow-hidden border border-white/10">
                            <Image
                                src="/team_working.jpg"   // Add your team image in public folder
                                alt="Team Working"
                                width={900}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* RIGHT CARDS */}
                        <div className="grid sm:grid-cols-2 gap-8">

                            {[
                                {
                                    name: "Praneeth Chennoju",
                                    role: "Visual Graphics Designer",
                                    image: "/praneeth.jpeg",
                                },
                                {
                                    name: "Rishi Renukuntla",
                                    role: "Visual Graphics Designer",
                                    image: "/rishii.jpeg",
                                },
                                {
                                    name: "Pranay Chennoju",
                                    role: "Software Engineer",
                                    image: "/pranayy.jpeg",
                                },
                                {
                                    name: "Deekshith Sura",
                                    role: "Social media marketer",
                                    image: "/deekshith.jpeg",
                                },
                            ].map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-[#111111] border border-white/10 rounded-xl p-8 text-center hover:border-purple-500/40 transition duration-300"
                                >
                                    {/* Profile Image */}
                                    <div className="flex justify-center mb-6">
                                        <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white/10">

                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                sizes="112px"
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-semibold">
                                        {member.name}
                                    </h3>

                                    <p className="text-purple-500 text-sm mt-2">
                                        {member.role}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>


            {/* VFX-CERTIFIED EXCELLENCE */}
            <section className="bg-black text-white py-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        VFX-Certified Excellence
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {/* CARD 1 */}
                        <div className="bg-[#111111] border border-purple-600/40 rounded-2xl p-10 
                      hover:border-purple-500 transition duration-300">

                            <div className="w-14 h-14 flex items-center justify-center 
                        bg-purple-600/20 rounded-full mb-6">
                                <ShieldCheck className="text-purple-500" size={28} />
                            </div>

                            <h3 className="text-xl font-semibold mb-2">
                                Certified VFX Specialist
                            </h3>

                            <p className="text-purple-500 text-sm mb-4">
                                Creative Multimedia
                            </p>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                Recognized for advanced expertise in visual effects production
                                and compositing techniques.
                            </p>
                        </div>


                        {/* CARD 2 */}
                        <div className="bg-[#111111] border border-white/10 rounded-2xl p-10 
                      hover:border-purple-500 transition duration-300">

                            <div className="w-14 h-14 flex items-center justify-center 
                        bg-purple-600/20 rounded-full mb-6">
                                <Award className="text-purple-500" size={28} />
                            </div>

                            <h3 className="text-xl font-semibold mb-2">
                                Motion Graphics Innovator Award 2024
                            </h3>

                            <p className="text-purple-500 text-sm mb-4">
                                Creative Multimedia
                            </p>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                Awarded for pioneering contributions to interactive
                                motion graphics experiences.
                            </p>
                        </div>


                        {/* CARD 3 */}
                        <div className="bg-[#111111] border border-white/10 rounded-2xl p-10 
                      hover:border-purple-500 transition duration-300">

                            <div className="w-14 h-14 flex items-center justify-center 
                        bg-purple-600/20 rounded-full mb-6">
                                <GraduationCap className="text-purple-500" size={28} />
                            </div>

                            <h3 className="text-xl font-semibold mb-2">
                                Advanced Digital Cinematography
                            </h3>

                            <p className="text-purple-500 text-sm mb-4">
                                Creative Multimedia
                            </p>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                Mastery in digital cinematography, advanced camera techniques,
                                and post-production workflows.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* OUR DIGITAL ARSENAL */}
            <section className="bg-black text-white py-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        Our Digital Arsenal
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Card 1 */}
                        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-purple-500 transition duration-300">
                            <Monitor className="text-purple-500 mb-4" size={28} />
                            <h3 className="text-lg font-semibold mb-2">Advanced Compositing</h3>
                            <p className="text-gray-400 text-sm">
                                Harnessing industry-leading compositing software for seamless
                                visual integration.
                            </p>
                        </div>

                        {/* Card 2
                        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-purple-500 transition duration-300">
                            <Box className="text-purple-500 mb-4" size={28} />
                            <h3 className="text-lg font-semibold mb-2">3D Modeling & Animation</h3>
                            <p className="text-gray-400 text-sm">
                                Creating intricate 3D assets and dynamic animations that bring
                                concepts to life.
                            </p>
                        </div> */}

                        {/* Card 3 */}
                        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-purple-500 transition duration-300">
                            <Zap className="text-purple-500 mb-4" size={28} />
                            <h3 className="text-lg font-semibold mb-2">Real-Time VFX</h3>
                            <p className="text-gray-400 text-sm">
                                Developing stunning visual effects optimized for real-time
                                rendering environments.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-purple-500 transition duration-300">
                            <Cpu className="text-purple-500 mb-4" size={28} />
                            <h3 className="text-lg font-semibold mb-2">Generative AI Tools</h3>
                            <p className="text-gray-400 text-sm">
                                Leveraging AI for rapid prototyping, content generation,
                                and creative augmentation.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-purple-500 transition duration-300">
                            <Palette className="text-purple-500 mb-4" size={28} />
                            <h3 className="text-lg font-semibold mb-2">Color Grading Suites</h3>
                            <p className="text-gray-400 text-sm">
                                Precision color manipulation to achieve cinematic looks
                                and enhance emotional impact.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-purple-500 transition duration-300">
                            <Film className="text-purple-500 mb-4" size={28} />
                            <h3 className="text-lg font-semibold mb-2">Virtual Production</h3>
                            <p className="text-gray-400 text-sm">
                                Utilizing virtual sets and extended reality for immersive
                                filmmaking experiences.
                            </p>
                        </div>

                        {/* Card 7
                        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-purple-500 transition duration-300">
                            <Workflow className="text-purple-500 mb-4" size={28} />
                            <h3 className="text-lg font-semibold mb-2">Procedural Content</h3>
                            <p className="text-gray-400 text-sm">
                                Employing procedural generation for complex simulations
                                and scalable asset creation.
                            </p>
                        </div> */}

                        {/* Card 8 */}
                        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-purple-500 transition duration-300">
                            <PenTool className="text-purple-500 mb-4" size={28} />
                            <h3 className="text-lg font-semibold mb-2">Concept Art & Storyboarding</h3>
                            <p className="text-gray-400 text-sm">
                                Visualizing ideas from initial sketches to detailed
                                production-ready storyboards.
                            </p>
                        </div>
                        {/* Website Development */}
                        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-purple-500 hover:translate-y-[-4px] transition duration-300">
                            <Globe className="text-purple-500 mb-4" size={28} />
                            <h3 className="text-lg font-semibold mb-2">Website Development</h3>
                            <p className="text-gray-400 text-sm">
                                Designing and developing high-performance, responsive websites
                                that elevate brand presence and drive conversions.
                            </p>
                        </div>

                        {/* App Development */}
                        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-purple-500 hover:translate-y-[-4px] transition duration-300">
                            <Smartphone className="text-purple-500 mb-4" size={28} />
                            <h3 className="text-lg font-semibold mb-2">App Development</h3>
                            <p className="text-gray-400 text-sm">
                                Building scalable, intuitive mobile applications for iOS and Android
                                that deliver seamless digital experiences.
                            </p>
                        </div>


                    </div>
                </div>
            </section>
            {/* FOOTER */}
            <footer className="bg-black text-white border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-20">

                    <div className="grid gap-12 md:grid-cols-4">

                        {/* BRAND */}
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                {/* White logo container – tight */}
                                <div className="bg-white rounded-md w-9 h-9 overflow-hidden flex items-center justify-center">
                                    <Image
                                        src="/beyondl.png"
                                        alt="Beyond Framez Logo"
                                        width={60}
                                        height={60}
                                        className="object-cover w-16 h-16"
                                    />
                                </div>

                                <span className="text-white font-semibold text-lg">
                                    Beyond <span className="text-red-500">Framez</span>
                                </span>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                                Crafting cinematic digital experiences through VFX, motion graphics,
                                website & app development that captivate and convert.
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-5 text-gray-400">
                                <a href="#" className="hover:text-white transition">
                                    <Facebook size={18} />
                                </a>
                                <a href="#" className="hover:text-white transition">
                                    <Instagram size={18} />
                                </a>
                                <a href="#" className="hover:text-white transition">
                                    <Twitter size={18} />
                                </a>
                                <a href="#" className="hover:text-white transition">
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>

                        {/* COMPANY */}
                        <div>
                            <h4 className="font-semibold mb-5 text-white">Company</h4>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><a href="/" className="hover:text-white transition">Home</a></li>
                                <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                                <li><a href="/services" className="hover:text-white transition">Services</a></li>
                                <li><a href="/portfolio" className="hover:text-white transition">Portfolio</a></li>
                                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                            </ul>
                        </div>

                        {/* SERVICES */}
                        <div>
                            <h4 className="font-semibold mb-5 text-white">Services</h4>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li>Video Production</li>
                                <li>VFX & Motion Graphics</li>
                                <li>Branding</li>
                                <li>Website Development</li>
                                <li>App Development</li>
                            </ul>
                        </div>

                        {/* CONTACT */}
                        <div>
                            <h4 className="font-semibold mb-5 text-white">Contact</h4>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li className="flex items-center gap-3">
                                    <Mail size={16} />
                                    beyondframez2801@gmail.com
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone size={16} />
                                    +91 7981464973, 9381774128
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin size={16} className="mt-0.5" />
                                    Warangal, India
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/10 mt-16 pt-6 text-center text-gray-500 text-sm">
                        © {new Date().getFullYear()} Beyond Framez. All rights reserved.
                    </div>

                </div>
            </footer>



        </main>

    );
}
