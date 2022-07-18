import React from "react";
import DocItem from "@theme-original/DocItem";
import Utterance from "@site/src/components/Utterance";

export default function DocItemWrapper(props) {
    return (
        <>
            <DocItem {...props} />
            <Utterance />
        </>
    );
}
