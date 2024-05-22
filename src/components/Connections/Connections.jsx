import Connection from "./Connection";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const Connections = () => {
    return (    
        <motion.div
            className="text-white xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 w-full grid grid-cols-1 gap-6 mt-16 h-[90vh] overflow-y-scroll overflow-x-hidden p-8"
            variants={container}
            initial="hidden"
            animate="show"
        >
            <Connection
                name="Bryant Everett"
                profession="Full-stack Web"
                src="https://randomuser.me/api/portraits/men/1.jpg"
            />
            <Connection
                name="Darron"
                profession="Dev ops Engineer"
                src="https://randomuser.me/api/portraits/men/4.jpg"
            />
            <Connection
                name="Alonso Bartlett"
                profession="Cloud expert"
                src="https://randomuser.me/api/portraits/men/6.jpg"
            />
            <Connection
                name="Jessica"
                profession="Cyber Security"
                src="https://randomuser.me/api/portraits/men/7.jpg"
            />
            <Connection
                name="Claudine"
                profession="Front-end Dev"
                src="https://randomuser.me/api/portraits/men/8.jpg"
            />
            <Connection
                name="Stacie Banks"
                profession="Ethical Hacker"
                src="https://randomuser.me/api/portraits/men/9.jpg"
            />
            <Connection
                name="Mitzi Montoya"
                profession="Back-end Dev"
                src="https://randomuser.me/api/portraits/men/10.jpg"
            />
            <Connection
                name="Russ Mayo"
                profession="UI/UX Designer"
                src="https://randomuser.me/api/portraits/men/11.jpg"
            />
            <Connection
                name="Julianne Hart"
                profession="Cloud Expert"
                src="https://randomuser.me/api/portraits/men/12.jpg"
            />
            <Connection
                name="Billie"
                profession="Full-stack Web"
                src="https://randomuser.me/api/portraits/men/13.jpg"
            />
            <Connection
                name="Alfred"
                profession="CS Major"
                src="https://randomuser.me/api/portraits/men/14.jpg"
            />
            <Connection
                name="Kenya Beard"
                profession="Back-end Dev"
                src="https://randomuser.me/api/portraits/men/15.jpg"
            />
            <Connection
                name="Julianne Hart"
                profession="Ethical-hacker"
                src="https://randomuser.me/api/portraits/men/16.jpg"
            />
            <Connection
                name="Tracey Knox"
                profession="Back-end Dev"
                src="https://randomuser.me/api/portraits/men/17.jpg"
            />
            <Connection
                name="Timothy Waller"
                profession="Cloud Expert"
                src="https://randomuser.me/api/portraits/men/18.jpg"
            />
            <Connection
                name="Alfred"
                profession="Full-stack Web"
                src="https://randomuser.me/api/portraits/men/19.jpg"
            />
            <Connection
                name="Billie Frazier"
                profession="Dev ops Eng"
                src="https://randomuser.me/api/portraits/men/2.jpg"
            />
            <Connection
                name="Julianne Hart"
                profession="Cloud Expert"
                src="https://randomuser.me/api/portraits/men/20.jpg"
            />
        </motion.div>
    );
};

export default Connections;
