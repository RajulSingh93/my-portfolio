import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoMail,
  IoCall,
  IoLogoLinkedin,
} from "react-icons/io5";

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      >
        Hello, I&apos;m a full-time graduate student based in New York!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rajul Singh
          </Heading>
          <p>Project/Product Manager</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
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
          I&apos;m Rajul Singh, Self-motivated and progress-driven with an
          extensive background in Technical industry. My work experiences not
          only allowed me to strengthen my abilities in Technical but also gain
          skills in Coordinating, Marketing and agile methodology. Someone who
          you can count on to show up and get the job done. I make it a priority
          to learn all to improve what I know and what can offer my employer.
          This is one of the personal attributes that set me apart.
          Additionally, Having pride in myself being organized, detail-oriented,
          and capable of managing my time. In my previous role I was a skilled
          and hardworking Developer.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/comingsoon">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1993</BioYear>
          Born in Bhopal, India.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Completed the Bachelor&apos;s Program in Information Technology at
          Oriental Institute of Science and Technology.
        </BioSection>
        <BioSection>
          <BioYear>2018-2020</BioYear>
          Worked at Worldsoft Technologies, Bhopal (India)
        </BioSection>
        <BioSection>
          <BioYear>Jan 2021-2023</BioYear>
          Styding MBA Information System at Pace University, New York
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Technical Skills
        </Heading>
        <Paragraph>
          Python, MS SQL, Database Application, HTML, CSS, JavaScript, MySQL,
          DBMS, Office 365, MS Office, Fl studio, Adobe Illustrator, Adobe
          Premier pro, Oracle, Notion
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Business Skills
        </Heading>
        <Paragraph>
          Project Management, Information Systems Project and Change Management
          Business Analytics and Statistics, Managing Operations and Projects,
          Leading and Managing Teams, Strategic Decisions, Information Systems
          Design
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Disc Jockey, Coffee, Music, Photography, Traveling, Hiking, Camping,
          Cooking
        </Paragraph>
      </Section>

      <Section delay={0.3}>
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
              href="https://linkedin.com/in/rajul-singh-030024ba/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @rajul-singh-030024ba
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
      </Section>
    </Container>
  </Layout>
);

export default Home;
