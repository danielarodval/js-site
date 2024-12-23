import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Link, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" loading="lazy" />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({ children, title, thumbnail, href }) => (
    <Box w="100%" align="center">
        <LinkBox
            as={Link}
            href={href}
            scroll={false}
            cursor="pointer"
            bg={undefined}
            color={useColorModeValue('gray200', 'whiteAlpha.900')}
            _hover={{ textDecoration: 'none'}}
            >
            <Image
                src={thumbnail}
                alt={title}
                className='grid-item-thumbnail'
                placeholder='blur' />
            <LinkOverlay as="div" href={href}>
                <Text mt={2} fontSize={20}>
                    {title}
                </Text>
            </LinkOverlay>
            <Text fontSize={14}>
                {children}
            </Text>
        </LinkBox>
    </Box>
)

export const GridItemStyle = () => (
    <Global styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
        }`}
    />
)