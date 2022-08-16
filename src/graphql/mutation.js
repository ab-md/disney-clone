import { gql } from "@apollo/client";

const WATCH_VIDEO = gql`
    mutation videoSlug($slug: String!) {
        updateVideo(data: {whatched: true}, where: {slug: $slug}) {
            whatched
          }
    }
`

const PUBLISH_WATCHING = gql`
    mutation videoSlug ($slug: String!) {
        publishVideo(where: {slug: $slug}) {
            whatched
          }
    }
`

export {
    WATCH_VIDEO,
    PUBLISH_WATCHING,
}