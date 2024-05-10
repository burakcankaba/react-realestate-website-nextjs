import Blog from '@/components/blogs/Blog'
import React from 'react'
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

const Index = () => {
    const router = useRouter()
    const { t, i18n } = useTranslation('common')
    const currentLanguageCode = i18n.language;
  return (
    <div className='blogsIndex'>
        <Blog/>
    </div>
  )
}

export default Index