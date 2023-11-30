import React from "react";

// import 'semantic-ui-css/semantic.min.css'

function Loading({ inverted = true, content = "Loading..." }) {
    return (
        <>
            <div className="full-height">

            </div>
            {/* <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"></link>
            </Helmet>
            <div className="full-height">
                <Segment>
                    < Dimmer inverted={inverted} active={true}>
                        < Loader content={content} />
                    </ Dimmer>
                </Segment>
            </div> */}
        </>
    )
}

export default Loading;
