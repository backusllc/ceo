import React, { useEffect, useMemo, useState } from 'react';

import NewsList from '../WordPress/NewsList';
import { useGetWordpressCustomPostSettings } from '../../../hooks/useGetWordpressCustomPostSettings';
import SNS from '../../../components/organisms/WordPress/SNS';

import Title from './Title';
import Pagination from './Pagenation';
import { filterWrap, filterDiv, filterContainer, filter, filterButton, selectedButton, blogWrap, filterTagDiv, filterText, filterTagLists } from './NewsPage.css'

const categoryFilter = [
    { seq: 0, id: "all", name: "全て" },
    { seq: 1, id: "dGVybTo0NzU=", name: "お知らせ" },
    { seq: 2, id: "dGVybTo0Nzg=", name: "プレスリリース" },
    { seq: 3, id: "dGVybTo0ODE=", name: "活動報告" },
];

const NewsPage = React.memo(() => {
    const [categoryStatus, setCategoryStatus] = useState(0);
    const [news, setNews] = useState();
    const [page, setPage] = useState(1);

    const { loading: newsLoading, data: newsLists } = useGetWordpressCustomPostSettings();
    const initialData = newsLists?.blogs?.edges;

    const blogLimit = 6;


    useEffect(() => {
        let defaultCategoryStatus = 0;
        const hashSave = window.location.hash;

        switch (hashSave) {
            case "#information":
                defaultCategoryStatus = 1;
                break;
            case "#release":
                defaultCategoryStatus = 2;
            case "#report":
                defaultCategoryStatus = 3;
            default:
                break;
        };
        setCategoryStatus(defaultCategoryStatus);
    }, [])

    useEffect(() => {
        setNews(newsLists?.blogs?.edges);
    }, [newsLists])

    const filteredEvents = useMemo(() => {
        setPage(1);

        if (categoryStatus === 0) return initialData;

        let result: any = [];

        news?.forEach((e: any) => {
            if (e.node.categories.edges.length > 0) {
                let value = e
                    .node.categories.edges
                    .find((d: any) => {
                        return d.node.id === categoryFilter[categoryStatus].id;
                    })
                if (value) {
                    return result.push(e);
                }
            }
            else {
                return result.push(e);
            }
        })

        return result;
    }, [categoryStatus, newsLists]);

    if (newsLoading) { return <div></div>; }

    const lastBlogIndex = page * blogLimit;
    const firstBlogIndex = lastBlogIndex - blogLimit;
    const currentNews = filteredEvents?.slice(firstBlogIndex, lastBlogIndex);

    const changeEvent = (status: number) => {
        setCategoryStatus(status);
    };

    const pageGo = (n: number) => {
        setPage(n);
        window.scrollTo({
            top: 0,
            behavior: "auto",
        });
    };

    return (
        <>
            <div className={`inner ${blogWrap}`} >
                <Title Tag='h2' title='NEWS' subTitle='ニュース' isPageTitle={true} />
                <div className={filterWrap}
                    data-aos="fade"
                    data-aos-duration="100"
                    data-aos-easing="ease"
                >
                    <div className={filterContainer}>
                        <div className={filterDiv} >
                            {
                                categoryFilter.map((category: any) => {
                                    return (
                                        <div id={category.id} className={filter} onClick={() => changeEvent(category.seq)}>
                                            <div className={`${categoryStatus === category.seq ? selectedButton : ""} ${filterButton}`}>{category.name}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <NewsList dataSrc={currentNews} />
                <Pagination
                    totalBlogs={filteredEvents?.length}
                    currentPages={page}
                    paginate={pageGo}
                    blogPerPage={blogLimit} />
            </div>
            <SNS />
        </>
    )
});

export default NewsPage;
