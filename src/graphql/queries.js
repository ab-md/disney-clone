import { gql } from "@apollo/client";

const GET_VIDEOS = gql`
    query {
        videos {
            description
            id
            slug
            tags
            title
            whatched
            cover {
              url
              fileName
            }
            video {
              fileName
              url
            }
            platform {
              id
              slug
              title
            }
          }
    }
`

const GET_VIDEO = gql`
    query videoSlug($slug: String!) {
      video(where: {slug: $slug}) {
        id
        title
        description
        slug
        whatched
        cover {
          fileName
          url
        }
        video {
          fileName
          url
        }
      }
    }
`

const UNWATCHED_VIDEOS = gql`
    query {
      videos(where: {whatched: false}) {
        id
        title
        slug
        whatched
        cover {
          url
          fileName
        }
      }
    }
`

const GET_USER = gql`
    query {
      account(where: {username: "daniel"}) {
        username
        avatar {
          url
          fileName
        }
        platform {
          title
          slug
        }
      }
    }
`

export {
    GET_VIDEOS,
    GET_VIDEO,
    UNWATCHED_VIDEOS,
    GET_USER,
}