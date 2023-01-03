import React, { useEffect, useMemo, useState } from 'react';

import CategoryActivities from '../Shopify/CategoryActivities';
import { useGetWordpressActivity } from '../../../hooks/useGetWordpressActivity';
import SNS from '../../../components/organisms/WordPress/SNS';

import Title from './Title';
import { filterWrap, filterDiv, filterContainer, filter, filterButton, selectedButton, filterTagDiv, filterText, filterTagLists } from './Activity.css'

const categoryFilter = [
    { seq: 0, id: "all", name: "全て" },
    { seq: 1, id: "dGVybTo1MDk=", name: "教育" },
    { seq: 2, id: "dGVybTozOQ==", name: "イベント" },
    { seq: 3, id: "dGVybTo1MTI=", name: "コミュニティ" },
];

const Activity = React.memo(({ hash }: any) => {
    const [categoryStatus, setCategoryStatus] = useState(0);
    const [activity, setActivity] = useState();
    const [page, setPage] = useState(1);

    const { loading: activityLoading, data: activityLists } = useGetWordpressActivity();
    const initialData = activityLists?.allActivity.edges;

    const blogLimit = 6;

    useEffect(() => {
        let defaultCategoryStatus = 0;
        const hashSave = window.location.hash;

        switch (hashSave) {
            case "#education":
                defaultCategoryStatus = 1;
                break;
            case "#event":
                defaultCategoryStatus = 2;
            case "#community":
                defaultCategoryStatus = 3;
            default:
                break;
        };
        setCategoryStatus(defaultCategoryStatus);
    }, [])

    useEffect(() => {
        setActivity(activityLists?.allActivity.edges);
    }, [activityLists])

    const filteredEvents = useMemo(() => {
        setPage(1);

        if (categoryStatus === 0) return initialData;

        let result: any = [];

        activity?.forEach((e: any) => {
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
    }, [categoryStatus, activityLists]);

    if (activityLoading) { return <div className="full-height"></div>; }

    const lastBlogIndex = page * blogLimit;
    const firstBlogIndex = lastBlogIndex - blogLimit;
    const currentActivity = filteredEvents?.slice(firstBlogIndex, lastBlogIndex);

    console.log(currentActivity);

    const changeEvent = (status: number) => {
        setCategoryStatus(status);
    };

    return (
        <>
            <div className="inner" >
                <Title Tag='h1' title='ACTIVITY' subTitle='活動概要' isPageTitle={true} />
                <div className={filterWrap}
                    data-aos="fade"
                    data-aos-duration="100"
                    data-aos-easing="ease"
                >
                    <div className={filterContainer}
                        data-aos="fade"
                        data-aos-duration="100"
                        data-aos-easing="ease"
                    >
                        <div className={filterDiv} >
                            <div className={filter} onClick={() => changeEvent(0)}>
                                <div className={`${categoryStatus === 0 ? selectedButton : ""} ${filterButton}`}>全て</div>
                            </div>
                            <div className={filter} onClick={() => changeEvent(1)}>
                                <div className={`${categoryStatus === 1 ? selectedButton : ""} ${filterButton}`}>教育</div>
                            </div>
                            <div className={filter} onClick={() => changeEvent(2)}>
                                <div className={`${categoryStatus === 2 ? selectedButton : ""} ${filterButton}`}>イベント</div>
                            </div>
                            <div className={filter} onClick={() => changeEvent(3)}>
                                <div className={`${categoryStatus === 3 ? selectedButton : ""} ${filterButton}`}>コミュニティ</div>
                            </div>
                        </div>
                    </div>
                </div>

                <CategoryActivities dataSrc={currentActivity} slug="activity" isDisplayButton={false} />
            </div>
            <SNS />
        </>
    )
});

export default Activity;
