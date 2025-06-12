import '../styles/home.css'
import PrimaryButton from '../components/primaryButton'
import SecondaryButton from '../components/secondaryButton'
import { FiEye } from 'react-icons/fi'
import { FiDownload } from 'react-icons/fi'

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <section className='heroText'>
                    <h1>Welcome, I'm Omar — Designer. Developer. Creator.</h1>
                    <h3>I blend art and technology to craft sleek, user-focused designs — from intuitive UX/UI interfaces to vibrant illustrations and responsive websites. As a graphic design enthusiast and computer science student, I'm on a continuous journey to explore, create, and redefine digital experiences.</h3>
                </section>
                <div className='heroButtons'>
                    <PrimaryButton
                        text="View My Work"
                        size="medium"
                        onClick={() => console.log('Button clicked!')}
                        icon={<FiEye />}
                    />
                    <SecondaryButton
                        text="Download My CV"
                        size="medium"
                        onClick={() => console.log('Button clicked!')}
                        icon={<FiDownload />}
                    />
                </div>
            </section>
        </div>
    )
}

export default Home