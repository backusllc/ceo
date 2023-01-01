import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

const NotFound = () => {
    const [isMount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
    }, [])

    if (!isMount) {
        return (
            <div></div>
        )
    }

    return (
        <div className="not-found-message">
            <h1>お探しのページが見つかりません</h1>
            <Link to="/">トップページへ</Link>
        </div>
    )
}

export default NotFound;
