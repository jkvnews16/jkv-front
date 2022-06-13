import { gql } from "@apollo/client";

export const getSnTEnglish = gql`
  query {
    page(id: 5) {
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

export const getSnTHindi = gql`
  query {
    page(id: 5) {
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

export const getSnTMarathi = gql`
  query {
    page(id: 5) {
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
