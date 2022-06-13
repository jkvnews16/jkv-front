import { gql } from "@apollo/client";

export const getLocalEnglish = gql`
  query {
    page(id: 1) {
      data {
        id
        attributes {
          Page
          posts(filters: { language: { Language: { contains: "English" } } }) {
            data {
              id
              attributes {
                Thumbnail {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                Title
                Author
                Date
                Content
              }
            }
          }
        }
      }
    }
  }
`;

export const getLocalHindi = gql`
  query {
    page(id: 1) {
      data {
        id
        attributes {
          Page
          posts(filters: { language: { Language: { contains: "Hindi" } } }) {
            data {
              id
              attributes {
                Thumbnail {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                Title
                Author
                Date
                Content
              }
            }
          }
        }
      }
    }
  }
`;

export const getLocalMarathi = gql`
  query {
    page(id: 1) {
      data {
        id
        attributes {
          Page
          posts(filters: { language: { Language: { contains: "Marathi" } } }) {
            data {
              id
              attributes {
                Thumbnail {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                Title
                Author
                Date
                Content
              }
            }
          }
        }
      }
    }
  }
`;
