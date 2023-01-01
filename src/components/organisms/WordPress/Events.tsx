import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'gatsby';

import CategoryProducts from '../../../components/organisms/Shopify/CategoryProducts';
import { useGetWordpressEvents } from '../../../hooks/useGetWordpressEvents';
import { useGetWordpressTags } from '../../../hooks/useGetWordpressTags';

import Title from '../../../components/organisms/WordPress/Title';
import Tag from '../../../components/organisms/WordPress/Tag';
import Pagination from './../../../components/organisms/WordPress/Pagenation';
import SNS from '../../../components/organisms/WordPress/SNS';

import { filterWrap, filterDiv, filterContainer, filter, filterButton, selectedButton, filterTagDiv, filterText, filterTagLists } from './Events.css'

const Events = React.memo(({ hash }: string) => {
    const [tagIn, SetTagIn] = useState([]);
    const [eventStatus, SetEventStatus] = useState(0);
    const [events, setEvents] = useState();
    const [page, setPage] = useState(1);

    const nowDatetime = new Date();
    const { loading: tagLoading, data: tagLists } = useGetWordpressTags();
    const { loading: eventLoading, data: eventLists } = useGetWordpressEvents();
    const initialData = eventLists?.posts?.edges;
    const blogLimit = 12;

    useEffect(() => {
        let defaultEventStatus = 0;

        switch (hash) {
            case "#before":
                defaultEventStatus = 1;
                break;
            case "#end":
                defaultEventStatus = 2;
            default:
                break;
        };
        SetEventStatus(defaultEventStatus);
    }, [])

    useEffect(() => {
        setEvents(eventLists?.posts?.edges);
    }, [eventLists])

    const filteredEvents = useMemo(() => {
        setPage(1);
        let tmpEvents = events;

        tmpEvents = tmpEvents?.filter(row => {
            if (eventStatus == 0) {
                return true;
            }
            else if (eventStatus == 1 && (!row.node.commonACF.displayenddate || row.node.commonACF.displayenddate < nowDatetime.toLocaleString().replaceAll('/', '-'))) {
                return false;
            }
            else if (eventStatus == 2 && (!row.node.commonACF.displayenddate || row.node.commonACF.displayenddate >= nowDatetime.toLocaleString().replaceAll('/', '-'))) {
                return false;
            }
            return row;
        });

        return tmpEvents;
    }, [events, eventStatus, tagIn]);


    if (eventLoading) return <></>
    if (tagLoading) { return <div></div>; }

    const displayTags = tagLists.tags.edges.filter((row: any) => {
        if (row.node.posts.edges.length > 0) {
            return true;
        } else {
            return false;
        }
    });

    const lastBlogIndex = page * blogLimit;
    const firstBlogIndex = lastBlogIndex - blogLimit;
    const currentEvents = filteredEvents?.slice(firstBlogIndex, lastBlogIndex);

    const changeEvent = (status: number) => {
        SetEventStatus(status);
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
            <div className="inner" >
                <Title Tag='h2' title='EVENT' subTitle='イベント' isPageTitle={true} />
                <div className={filterWrap}>
                    <div className={filterContainer}>
                        <div className={filterDiv} >
                            <div className={filter} onClick={() => changeEvent(0)}>
                                <div className={`${eventStatus === 0 ? selectedButton : ""} ${filterButton}`}>全て</div>
                            </div>
                            <div className={filter} onClick={() => changeEvent(1)}>
                                <div className={`${eventStatus === 1 ? selectedButton : ""} ${filterButton}`}>開催前イベント</div>
                            </div>
                            <div className={filter} onClick={() => changeEvent(2)}>
                                <div className={`${eventStatus === 2 ? selectedButton : ""} ${filterButton}`}>終了イベント</div>
                            </div>
                        </div>
                        <div className={filterTagDiv} style={{ display: 'flex' }}>
                            <div className={filterText}>タグで絞り込む</div>
                            <ul className={filterTagLists} style={{ display: 'flex' }}>
                                {
                                    displayTags.map((item: any) => {
                                        return <>
                                            <Tag setTagIn={SetTagIn} tagIn={tagIn} filtering={filteredEvents} setEvents={setEvents} data={initialData} node={item.node}>{item.node.name}</Tag>
                                        </>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <CategoryProducts dataSrc={currentEvents} title={"イベント"} slug="event" displayCount={3} isDisplayButton={false} />
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

export default Events;
