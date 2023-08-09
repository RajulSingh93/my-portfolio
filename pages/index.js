import { Container, Heading, Box, Image } from "@chakra-ui/react";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import {} from "react-icons/io5";

const Home = () => (
    <Layout>
        <Container>
            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Rajul Singh
                    </Heading>
                    {/*<p>Project/Product Manager</p>*/}
                </Box>
                <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/rajulpic.jpg"
                        alt="Profile image"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Howdy!
                </Heading>
                <Paragraph>
                    I&apos;m Rajul Singh, I am a highly motivated professional with a diverse
                    background in Information Systems and a strong passion for leveraging technology
                    to drive business growth. My approach centers on fostering a culture of
                    continuous learning and innovation.
                </Paragraph>
            </Section>

            <Section delay={0.2}>
                <Paragraph>
                    With a proven track record of excellence in various roles and a genuine passion
                    for leveraging technology and AI, I am eager to connect with like-minded
                    professionals to explore new opportunities and contribute to the ever-evolving
                    digital landscape. Lets connect and explore how we can create a meaningful
                    impact together! #DigitalTransformation #AI #Product #Business #AgileSoftware
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    PROFESSIONAL
                </Heading>
                <Paragraph>
                    Excellence in Business: I led a successful project at Fisher Investments that
                    delved into business analytics, uncovering insights that had a tangible impact
                    on our decision-making. These insights didnt just inform better choices; they
                    also fine-tuned our business strategies, ultimately contributing to enhanced
                    outcomes.
                </Paragraph>
            </Section>

            <Section delay={0.4}>
                <Paragraph>
                    Innovative Campus Ambassador: While working as a Campus Ambassador at Ruffalo
                    Noel Levitz, I crafted inventive strategies to engage and inform fellow students
                    about the organizations offerings. These strategies proved so effective that we
                    saw a significant uptick in student participation in related programs.
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Paragraph>
                    Data-driven Solutions: My internship as a Business Intelligence Engineer at Dun
                    & Bradstreet saw me crafting and implementing agile methodologies and
                    data-driven solutions. This dynamic approach revolutionized the way we made
                    decisions, directly leading to better business outcomes.
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Paragraph>
                    Full-stack Web Development: I took the lead in a diverse team at Worldsoft
                    Technologies Pvt. Ltd, overseeing the development of websites across real
                    estate, restaurants, and education sectors. By enhancing user experience and
                    functionality, the websites earned positive feedback and drove increased
                    business.
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Paragraph>
                    Leadership in Volunteering: My role as a Research Coordinator at Meta showcased
                    my ability to coordinate and manage data collection for a groundbreaking
                    research project. This initiative, focusing on inventive ways to control and
                    interact with computers, emphasized my leadership skills and my commitment to
                    advancing technology.
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Paragraph>
                    Contributions to Machine Learning: As a Research Study Assistant at Dandelion, I
                    collected and organized data that directly contributed to the evolution of
                    machine learning and artificial intelligence. These efforts played a pivotal
                    role in driving technological progress in this field.
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Paragraph>
                    Administrative Excellence: During my time as an Administrative Officer at Pace
                    University - Lubin School of Business, I excelled in efficiently organizing a
                    range of arts and culture events. My capability to manage various aspects
                    concurrently showcased my adept organizational and multitasking skills.
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Paragraph>
                    Membership in Honor Society: Being a part of the BETA GAMMA SIGMA Honor Society
                    highlighted my exceptional academic achievements and dedication to excellence
                    within the realm of business.
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Paragraph>
                    Certifications in Agile and Data Warehousing: My certifications in Agile Product
                    Owner Role: Foundations and Best Practices for Data Warehousing with Amazon
                    Redshift underscore my commitment to staying current with industry trends and
                    embracing the latest practices and technologies.
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Paragraph>
                    Continual Learning: My accomplishments in completing courses in Business
                    Analytics & Statistics, Database Management Systems, and Global Business,
                    Ethics, and Social Responsibility reflect my ongoing dedication to learning and
                    the continual enhancement of my skill set.
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    PASSION
                </Heading>
                <Paragraph>
                    I am someone who loves music and creating imaginative designs. Its like my heart
                    dances to music and my mind is always coming up with new ideas for visuals. My
                    journey has been a thrilling mix of melodies and pictures, where I found my
                    passion in combining music and creative graphic design.
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Paragraph>
                    Music is my way of expressing myself. I have dived deep into the world of music,
                    listening to everything from gentle violin sounds to exciting drumbeats. When I
                    make music, I am sharing my feelings, experiences, and stories. It is not just
                    about the technical stuff; it is about the magic that happens when different
                    sounds come together to create something completely fresh. Whether it is a
                    haunting piano tune or a lively electronic song, I find comfort and endless
                    inspiration in all types of music.
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Paragraph>
                    And then there is graphic design, where I use digital tools to bring my thoughts
                    to life on a screen. Colors, fonts, and pictures are my tools, and I use them to
                    make visuals that touch people is hearts. My designs are not just meant to look
                    nice; they carry messages, emotions, and ideas that go beyond words. From making
                    eye-catching posters for events to creating album covers that make you think, I
                    really enjoy turning thoughts into visual stories.
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Paragraph>
                    Mixing music and graphic design has shown me a special kind of creativity. I see
                    colors in music and melodies in designs. Sometimes my music starts with a
                    picture in my mind, and my designs have the rhythm and feeling of music in them.
                    This unique way of working lets me create art that is not only visually cool but
                    also meaningful.
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Paragraph>
                    If you take a look at my portfolio, you will get to see this exciting journey of
                    mine. There are tunes that match my feelings and designs that show what is on my
                    mind. It is proof of how powerful creativity can be and how much fun it is to
                    bring music and design together. I am thrilled to share my passion with you and
                    can it wait to try new creative things that mix the magic of music and the
                    beauty of design even more.
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ♥
                </Heading>
                <Paragraph>
                    Disc Jockey, Coffee, Music, Photography, Traveling, Hiking, Camping, Cooking
                </Paragraph>
                {/*  <Box align="center" my={4}>
                    <a href="https://drive.google.com/file/d/1V2Osjw6uLXbp7djiVi-J1UXKcu01-sW2/view?usp=sharing">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            Resume
                        </Button>
                    </a>
                </Box>*/}
            </Section>

            {/* <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/rajulsingh93" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @rajulsingh93
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/honey_fc" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @honey_fc
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/rajul-singh93/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @rajul-singh93
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="tel:+15515542350">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoCall} />}
              >
                +1 551 554 2350
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:rajulsingh1993@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoMail} />}
              >
                Gmail Personal
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:rs75021n@pace.edu " target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoMail} />}
              >
                Work Mail
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>*/}
        </Container>
    </Layout>
);

export default Home;
