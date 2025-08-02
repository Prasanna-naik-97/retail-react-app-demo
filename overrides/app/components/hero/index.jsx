import React from 'react'

import {getAssetUrl} from '@salesforce/pwa-kit-react-sdk/ssr/universal/utils'
import {Stack} from '@chakra-ui/react'
import {Image} from '@chakra-ui/react'
import {Box, Button, Link} from '@salesforce/retail-react-app/app/components/shared/ui'

const CustomHero = ({title, img}) => {
    const {src, alt} = img
    return (
        <div>
            <Image
                src={src}
                alt={alt}
                width="100%"
                height="500px"
            />
            <Stack direction={'row'}>
                <Button
                    as={Link}
                    _hover={{textDecoration: 'none'}}
                    target='_blank'
                    paddingX={10}>
                        Click
                </Button>
            </Stack>
        </div>
    )
}

export default CustomHero