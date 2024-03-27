import { Container, Box, Heading, Image, useColorModeValue, Link, Button } from '@chakra-ui/react';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import NextLink from 'next/link';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';


const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a data scientist based in Florida!
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Daniel Rodriguez Portfolio
                        </Heading>
                        <p>
                            Machine Learning Enthusiast (Analyst, Tinkerer, Designer)
                        </p>
                    </Box>

                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center">
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/daniel.PNG"
                            alt="Profile Image" />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Daniel Rodriguez is a Data Scientist with a profound interest and passion for machine learning and data engineering.
                        Previous experience ranges from the deployment of business intelligence reports for senior management to working within hackathon teams to deploy a ML tools.
                        Honing in these skills is not limited to the workplace, working on various projects and reports showcasing a versatile repertoire of coding and analytical skills.
                        To see a quick overview on these projects check out his{' '}
                        <Link href="https://github.com/danielarodval/resume?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </Link>.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightRoundedIcon />} colorScheme="green">
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Full Time Lead Analyst at Bank of New York Mellon developing data pipelines, low code/no code applications, and business intelligence reports.
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2024
                        </BioYear>
                        Completing a Bachelor&apos;s in Data Science with Minors in Computer Science and Statistics from the University of Central Florida
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2024
                        </BioYear>
                        Data Scientist I at the Bank of New York Mellon working on machine learning models and data engineering.
                    </BioSection>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Hobbies
                    </Heading>
                    <Paragraph>
                        <Link href='/keyboard' target="_blank" rel="noopener noreferrer">Keyboards</Link>, Music, Home Automation, <Link href='/coffee' target="_blank" rel="noopener noreferrer">Coffee</Link>, Random Scripts
                    </Paragraph>
                </Section>


            </Container>
        </Layout>
    )
}

export default Page