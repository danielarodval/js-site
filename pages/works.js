import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbScraper from '../public/images/scraper.png'
import thumbPricing from '../public/images/home_pricing.png'
import thumbSite from '../public/images/site.png'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontsize={20} mb={4}>
                Works
            </Heading>

            <Section delay={0.2}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Online Projects
                </Heading>
            </Section>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="scraper" title="This Website" thumbnail={thumbSite}>
                        An Example
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Section delay={0.4}>
                <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4}>
                    Tools
                </Heading>
            </Section>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="scraper" title="Home Pricing Insights: Treasury Data & Index Funds" thumbnail={thumbPricing}>
                        An Example
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="scraper" title="Morningstar Index Fund Performance Harvester" thumbnail={thumbScraper}>
                        An Example
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

        </Container>
    )
}
export default Works