import React, { useEffect, useState } from 'react';

import { tagList, tag, activeStyle } from './Tag.css'

interface Props {
    setTagIn?: any,
    tagIn: [],
    setEvents?: any,
    filtering?: any,
    data?: any,
    node?: any,
    children: React.ReactNode;
}

const Tag = React.memo(({ children, node, setTagIn, tagIn, setEvents, data }: Props) => {
    const [active, setActive] = useState(false);
    let tempTagIn = [];

    useEffect(() => {
        filtering();
    }, [tagIn])

    const classToggle = (event: any) => {
        const { target } = event;
        const targetId = target.getAttribute('tag-key');

        if (!active) {
            setTagIn((prevValue: any) => ([
                ...prevValue,
                targetId,
            ]))
        }
        else {
            tempTagIn = tagIn.filter((tagId, index) => (tagId !== targetId))
            setTagIn(tempTagIn);
        }
        setActive((prev: any) => !prev);
    }

    const filtering = () => {

        let result: Array<string> = [];

        data?.forEach((e) => {
            if (tagIn.length > 0) {
                let value = e
                    .node.tags.edges
                    .find((d) => {
                        return tagIn.indexOf(d.node.id) != -1
                    })
                if (value) {
                    return result.push(e);
                }
            }
            else {
                return result.push(e);
            }
        })
        return setEvents(result);
    }

    return (
        <>
            <li key={node.id} tag-key={node.id} onClick={
                classToggle
            } className={`${active ? activeStyle : ""} ${tag}`}>#{children}</li>
        </>
    );
});

export default Tag;
