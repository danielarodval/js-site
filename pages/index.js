import { Container, Box , Heading, Image, useColorModeValue, Link, Button} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const Page = () => {
    return(
        <Container>
            <Box borderRadius="lg" bg ={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a data scientist based in Florida!
            </Box>

            <Box display={{md:'flex'}}>
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
                mt={{base: 4, md: 0}} 
                ml={{md: 6}} 
                align="center">
                    <Image 
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    maxWidth="100px"
                    display="inline-block"
                    borderRadius="full"
                    src="/images/daniel.PNG"
                    alt="Profile Image"/>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Works
                </Heading>
                <Paragraph>
                    Daniel Rodriguez is a Data Scientist with a profound interest and passion for machine learning and data engineering.
                    Previous experience ranges from the deployment of crafted reports for senior management to working within hackathon teams to deploy a clustering analysis tool.
                    The workplace is not the trial ground for these skillsets, working on various projects and workflows that can be found on his GitHub to constantly develop beyond.
                    To see a quick overview on these projects check out his{' '}
                    <NextLink href="https://github.com/danielarodval/resume?tab=readme-ov-file">
                        <Link>GitHub</Link>
                    </NextLink>.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightRoundedIcon />} colorScheme="green">
                            My Portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
        </Container>
    )
}

export default Page