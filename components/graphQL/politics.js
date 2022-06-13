import { gql } from "@apollo/client";

export const getPoliticsEnglish = gql`
  query {
    page(id: 3) {
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

export const getPoliticsHindi = gql`
  query {
    page(id: 3) {
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

export const getPoliticsMarathi = gql`
  query {
    page(id: 3) {
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
