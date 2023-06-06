import React from 'react'
import Heading from './Heading/Heading'
import Wrap from '../../Layouts/Wrap/Wrap'
import Content from './Content/Content'
import CtaSection from '../../Components/CtaSection/CtaSection'

const index = () => {
  return (
    <>
        <Heading/>
        <Wrap>
            <Content/>
        </Wrap>
        <CtaSection/>
    </>
  )
}

export default index