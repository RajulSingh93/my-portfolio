import { Container, Heading, } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from "../components/paragraph";

const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Experience as a Front-End Developer
                </Heading>
                <Paragraph>
                    I have designed many successful websites in my 2.5 years of working in the field. I worked on 10+ front-end projects, delivering innovative concepts, wireframes, low-fidelity prototypes, and engaging user experiences.
                </Paragraph>
            </Section>
            <Section delay={0.2}>
                <Paragraph>
                    Developed 5+ e-commerce sites for small business owners using various web technologies
                    I meet with clients to hear what they expect the site to appear and how they'd like the pages to link to each other and maintain contact during the design process. I carefully test sites to ascertain they function smoothly on computers and smartphones and with different browsers and have participated in developing apps.
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Paragraph>
                    Principled expert with the capacity to utilize various industry programming programs
                    I am proficient in Adobe Illustrator InDesign, Photoshop, and Bridge and am very familiar with CSS, Joomla, WordPress, and HTML. I can use animation on web pages and include advertising in a manner that doesn't feel distracting or annoying.
                </Paragraph>
            </Section>
            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                    Specialties
                </Heading>
                <Paragraph>
                    PMLC, Service Delivery SDLC, program management, project management, personnel management, business process development and business improvement, creating customer-centric operations, Customer journey mapping, Microsoft, and Agile/Scrum and SAFe® Framework.
                </Paragraph>
            </Section>
        </Container>
    </Layout>
)

export default Works
