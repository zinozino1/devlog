import React from "react";
import BlogPostItem from "@theme-original/BlogPostItem";
import Utterance from "@site/src/components/Utterance";

export default function BlogPostItemWrapper(props) {
    return (
        <>
            <BlogPostItem {...props} />
            {/* <Utterance /> */}
        </>
    );
}
