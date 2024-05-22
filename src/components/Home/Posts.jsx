import Post from "./Post";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const Posts = () => {
    return (
        <motion.div
            className="grid grid-cols1 lg:grid-cols-2 gap-y-10 gap-1"
            variants={container}
            initial="hidden"
            animate="show"
        >
                <Post
                name="Toni Ellis"
                time="1"
                title="New Project Announcement: Excited to Share Our Latest Initiative"
                body="Javascript Handwritten notes 🚀 ave yourself $100k+ on a Marketing Education. Try these 6 Free University Marketing Courses. Whether you’re new to the industry… Or you’re a pro looking to hone your skills. Develop your marketing knowledge today."
                likes="654"
                src="https://randomuser.me/api/portraits/men/62.jpg"
                postSrc="https://media.licdn.com/dms/image/C4E12AQH6EK7ErRKSUw/article-cover_image-shrink_720_1280/0/1645719891714?e=2147483647&v=beta&t=vO5LwW9ST8CFVYt0_c_sCg3ndS4cnxcWH1niTNKFjXE"
            />
            <Post
                name="Henry Ayala"
                time="3"
                title="Networking Secrets: Building Valuable Connections in Your Industry"
                body="Job Description: MIS Executive. The candidate must be proficient in the following languages: Hindi and English. Location:- Bangalore (WFO). Salary:- 5.25 LPA + incentive. Do not undervalue your skills. You deserve fair compensation for them.   "
                likes="987K"
                src="https://randomuser.me/api/portraits/men/5.jpg"
                postSrc="https://static-assets.pixelied.com/use-cases/linkedin-posts/hero-img.png"
            />
            <Post
                name="Kailash Sunder"
                time="7"
                title="Noin Us: Upcoming Webinar on Industry Trends and Innovations"
                body="Do not undervalue your skills. You deserve fair compensation for them. A lot of internships (not all) happen through family connections & personal bias, don’t compare yourself with every second profile on LinkedIn. Ease out, chart your own journey. Keep cold texting people. It helps."
                likes="35K"
                src="https://source.unsplash.com/100x100/?portrait"
                postSrc="https://img.freepik.com/free-psd/business-strategy-instagram-posts-template_23-2150143111.jpg"
            />
            <Post
                name="Sumati Bhasin"
                time="9"
                title="How to Land Your Dream Job in Today’s Market"
                body="A spotlight on mental well-being, call for equality, and focus on values and culture — the world of work is going through a shift with more Gen Z now roaming office corridors. And in addition to coining trends like “Rage applying” and “Bare Minimum Monday,”"
                likes="5K"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                postSrc="https://www.socialmediaexaminer.com/wp-content/uploads/2022/03/linkedin-business-page-11-post-types-1200.png"
            />
            <Post
                name="Haimi Ray"
                time="14"
                title="Career Growth: Key Skills You Should Develop Right Now"
                body="Tip Calculator App Challenge This is a simple tip calculator web application challenge from Frontend Mentor that allows users to calculate the tip amount based on the bill amount, tip percentage, and the number of people sharing the bill. Do not undervalue your skills."
                likes="238"
                src="https://randomuser.me/api/portraits/men/2.jpg"
                postSrc="https://mediamodifier.com/blog/wp-content/uploads/2020/05/linkedin-post-templates-best-1024x536.jpg"
            />
            <Post
                name="Kris Ray"
                time="22"
                title="Career Growth: Key Skills You Should Develop Right Now"
                body="Nobody but Only in Pakistan. Pakistani Software Companies: “We are a USA or UK-based company hiring for a Graphic Designer having experience of 6+ Years with a salary range of 35k to 60k PKR Seriously man?” Note: Do not undervalue your skills. You deserve fair compensation for them."
                likes="198K"
                src="https://randomuser.me/api/portraits/men/29.jpg"
                postSrc="https://assets.mediamodifier.com/mockups/5eb2992f1e7aaf247254d90c/linkedin-text-post-mockup-generator.jpg"
            />
        </motion.div>
    );
};

export default Posts;
