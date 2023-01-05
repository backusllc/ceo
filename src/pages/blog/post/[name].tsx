import React from 'react';

import SEO from '../../../utils/seo';
import { useWordPressBlogSettings } from '../../../hooks/useWordPressBlogSettings'
import SingleBlog from '../../../components/organisms/WordPress/SingleBlog';
import { getBlogDataServerSide } from '../../../ssr/blogClient'

const EventPage = ({ serverData: { singleData } }) => {

    return (
        <>
            <SEO
                title={singleData.title}
                lang={'ja'}
                meta={[]}
                description={singleData.content}
                img={singleData.featuredImage.node.sourceUrl}
                alt={singleData.title}
            />
            <SingleBlog blog={singleData} />
        </>
    )
}

export default EventPage;

export async function getServerData(context: any) {

    const res = await getBlogDataServerSide(context.params.name);

    try {
        return {
            props: { singleData: res },
            status: 200,
        };
    } catch {
        return {
            singleData: [],
            status: 500,
        };
    }
}

//Head()の中でコンポーネントを利用
// export const Head = (props) => {
//     const slug = props.params.name;
//     const { loading: articleLoading, data: blogData } = useWordPressBlogSettings(slug);

//     console.log(props);
//     return (
//         <>
//             <title>aaa | 一般社団法人日本CEO協会</title>
//         </>
//     )
// }
